import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { z } from 'zod'

type Env = {
  SUPABASE_URL: string
  SUPABASE_SERVICE_ROLE_KEY: string
  RESEND_API_KEY: string
  SALES_NOTIFICATION_EMAIL?: string
}

const DEMO_REQUEST_SCHEMA = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  message: z.string().min(1).max(3000),
  businessType: z.string().max(120).optional().default(''),
  cityCountry: z.string().max(160).optional().default(''),
  phone: z.string().max(80).optional().default(''),
  tier: z.string().max(120).optional().default(''),
  sourcePage: z.string().max(255).optional().default(''),
  website: z.string().max(255).optional().default(''),
})

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}

function sanitizeInput(value: string): string {
  return value
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
}

function normalizePayload(input: z.infer<typeof DEMO_REQUEST_SCHEMA>) {
  return {
    name: sanitizeInput(input.name),
    email: sanitizeInput(input.email).toLowerCase(),
    message: sanitizeInput(input.message),
    businessType: sanitizeInput(input.businessType),
    cityCountry: sanitizeInput(input.cityCountry),
    phone: sanitizeInput(input.phone),
    tier: sanitizeInput(input.tier),
    sourcePage: sanitizeInput(input.sourcePage),
    website: sanitizeInput(input.website),
  }
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? iso : date.toISOString()
}

async function sendNotificationEmail(
  resend: Resend,
  recipient: string,
  payload: ReturnType<typeof normalizePayload>,
  createdAt: string,
) {
  const subject = 'New Demo Request — Quartum Games'
  const text = [
    'New demo request submission:',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.cityCountry || 'N/A'}`,
    `Role: ${payload.businessType || 'N/A'}`,
    `Interest: ${payload.tier || 'N/A'}`,
    `Phone: ${payload.phone || 'N/A'}`,
    `Source page: ${payload.sourcePage || 'N/A'}`,
    `Timestamp: ${formatDate(createdAt)}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')

  const html = `
    <h2>New demo request submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(payload.cityCountry || 'N/A')}</p>
    <p><strong>Role:</strong> ${escapeHtml(payload.businessType || 'N/A')}</p>
    <p><strong>Interest:</strong> ${escapeHtml(payload.tier || 'N/A')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || 'N/A')}</p>
    <p><strong>Source page:</strong> ${escapeHtml(payload.sourcePage || 'N/A')}</p>
    <p><strong>Timestamp:</strong> ${escapeHtml(formatDate(createdAt))}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br/>')}</p>
  `

  await resend.emails.send({
    from: 'Quartum Games <onboarding@resend.dev>',
    to: [recipient],
    subject,
    text,
    html,
    replyTo: payload.email,
  })
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  })
}

export async function onRequest({ request, env }: { request: Request; env: Env }) {
  if (request.method !== 'POST') {
    return json({ success: false, message: 'Method not allowed' }, 405)
  }

  let parsedJson: unknown
  try {
    parsedJson = await request.json()
  } catch {
    return json({ success: false, message: 'Invalid JSON payload' }, 400)
  }

  const parsed = DEMO_REQUEST_SCHEMA.safeParse(parsedJson)
  if (!parsed.success) {
    return json(
      {
        success: false,
        message: 'Validation failed',
        errors: parsed.error.flatten().fieldErrors,
      },
      400,
    )
  }

  const payload = normalizePayload(parsed.data)

  // Honeypot anti-spam: silently accept bots without storing or sending.
  if (payload.website) {
    return json({ success: true, message: 'Request received' }, 200)
  }

  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY || !env.RESEND_API_KEY) {
    return json({ success: false, message: 'Server is not configured properly' }, 500)
  }

  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY)
  const resend = new Resend(env.RESEND_API_KEY)
  const salesEmail = env.SALES_NOTIFICATION_EMAIL || 'salesquartumgroup@gmail.com'

  // Preserve current frontend structure by mapping existing fields:
  // cityCountry -> organization, businessType -> role, tier -> interest.
  const insertPayload = {
    name: payload.name,
    email: payload.email,
    organization: payload.cityCountry || null,
    role: payload.businessType || null,
    interest: payload.tier || null,
    message: payload.message,
    source_page: payload.sourcePage || null,
    phone: payload.phone || null,
  }

  const { data, error } = await supabase
    .from('demo_requests')
    .insert(insertPayload)
    .select('id, created_at')
    .single()

  if (error || !data) {
    console.error('Supabase insert failed', error)
    return json({ success: false, message: 'Failed to save your request' }, 500)
  }

  try {
    await sendNotificationEmail(resend, salesEmail, payload, data.created_at)
  } catch (emailError) {
    // Production-friendly behavior: lead capture is the priority, so we keep success.
    console.error('Resend notification failed', emailError)
    return json(
      {
        success: true,
        message: 'Request saved successfully',
        warning: 'Email notification failed',
        requestId: data.id,
      },
      200,
    )
  }

  return json(
    {
      success: true,
      message: 'Request submitted successfully',
      requestId: data.id,
    },
    200,
  )
}
