import { useState, FormEvent } from 'react'
import { CONTACT, DEMO_CTA_LABEL } from '@/constants'
import { trackCTA } from '@/analytics'

const BUSINESS_TYPES = ['Recreational tech center', 'Dental / medical waiting room', 'Other venue']
const TIER_OPTIONS = ['Tablet Station', 'Arcade + Projector', 'Full Projection', 'Not sure yet']

function buildMailtoBody(data: Record<string, string>): string {
  const lines = [
    `Name: ${data.name}`,
    `Business type: ${data.businessType}`,
    `City/Country: ${data.cityCountry}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Preferred tier: ${data.tier}`,
    data.message ? `Message: ${data.message}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

const PLACEHOLDER_ENDPOINT = '/api/demo-request'

const inputClass =
  'w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]'

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [cityCountry, setCityCountry] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [tier, setTier] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = {
      name,
      businessType,
      cityCountry,
      email,
      phone,
      tier,
      message,
    }

    trackCTA({ type: 'cta_click', label: 'Demo form submit', section: 'demo_form' })

    const body = encodeURIComponent(buildMailtoBody(data))
    const subject = encodeURIComponent('Demo request — Quartum Games')
    const mailto = `mailto:${CONTACT.salesEmail}?subject=${subject}&body=${body}`

    try {
      const res = await fetch(PLACEHOLDER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        return
      }
    } catch {
      // fall through to mailto
    }

    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border p-8 text-center"
        style={{
          backgroundColor: 'var(--panel)',
          borderColor: 'var(--border)',
        }}
      >
        <p className="font-semibold" style={{ color: 'var(--text)' }}>Thank you.</p>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-soft)' }}>
          We've received your request and will be in touch shortly. If you opened an email draft, you can send it to reach us directly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          Name <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="demo-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="demo-business" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          Business type <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <select
          id="demo-business"
          required
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
        >
          <option value="">Select…</option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="demo-city" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          City / Country <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="demo-city"
          type="text"
          required
          value={cityCountry}
          onChange={(e) => setCityCountry(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder="e.g. Brussels, Belgium"
        />
      </div>
      <div>
        <label htmlFor="demo-email" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          Email <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="demo-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="demo-phone" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          Phone <span style={{ color: 'var(--muted)' }}>(optional)</span>
        </label>
        <input
          id="demo-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder="+32 …"
        />
      </div>
      <div>
        <label htmlFor="demo-tier" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          Preferred tier
        </label>
        <select
          id="demo-tier"
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
        >
          <option value="">Select…</option>
          {TIER_OPTIONS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="demo-message" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          Message <span style={{ color: 'var(--muted)' }}>(optional)</span>
        </label>
        <textarea
          id="demo-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          style={{
            backgroundColor: 'var(--panel)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder="Tell us about your space or timeline…"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg border py-3.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        style={{
          borderColor: 'var(--border-strong)',
          color: 'var(--text-soft)',
        }}
      >
        {DEMO_CTA_LABEL}
      </button>
    </form>
  )
}
