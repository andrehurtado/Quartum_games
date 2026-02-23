import { useState, FormEvent } from 'react'
import { CONTACT } from '@/constants'
import { trackCTA } from '@/analytics'
import { useLocale } from '@/contexts/LocaleContext'

const BUSINESS_KEYS = ['formBusiness1', 'formBusiness2', 'formBusiness3'] as const
const TIER_KEYS = ['formTier1', 'formTier2', 'formTier3', 'formTier4'] as const

function buildMailtoBody(data: Record<string, string>, labels: Record<string, string>): string {
  const lines = [
    `${labels.name}: ${data.name}`,
    `${labels.business}: ${data.businessType}`,
    `${labels.city}: ${data.cityCountry}`,
    `${labels.email}: ${data.email}`,
    data.phone ? `${labels.phone}: ${data.phone}` : null,
    `${labels.tier}: ${data.tier}`,
    data.message ? `${labels.message}: ${data.message}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

const PLACEHOLDER_ENDPOINT = '/api/demo-request'

const inputClass =
  'w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]'

export function DemoForm() {
  const { t } = useLocale()
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

    const labels = {
      name: t('formName'),
      business: t('formBusiness'),
      city: t('formCity'),
      email: t('formEmail'),
      phone: t('formPhone'),
      tier: t('formTier'),
      message: t('formMessage'),
    }
    const bodyData = {
      ...data,
      businessType: data.businessType ? t(data.businessType as typeof BUSINESS_KEYS[number]) : '',
      tier: data.tier ? t(data.tier as typeof TIER_KEYS[number]) : '',
    }
    const body = encodeURIComponent(buildMailtoBody(bodyData, labels))
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
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border)',
        }}
      >
        <p className="font-semibold" style={{ color: 'var(--text)' }}>{t('formThankYou')}</p>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-soft)' }}>
          {t('formThankYouBody')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formName')} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="demo-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder={t('formPlaceholderName')}
        />
      </div>
      <div>
        <label htmlFor="demo-business" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formBusiness')} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <select
          id="demo-business"
          required
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
        >
          <option value="">{t('formSelect')}</option>
          {BUSINESS_KEYS.map((key) => (
            <option key={key} value={key}>{t(key)}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="demo-city" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formCity')} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="demo-city"
          type="text"
          required
          value={cityCountry}
          onChange={(e) => setCityCountry(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder={t('formPlaceholderCity')}
        />
      </div>
      <div>
        <label htmlFor="demo-email" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formEmail')} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="demo-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder={t('formPlaceholderEmail')}
        />
      </div>
      <div>
        <label htmlFor="demo-phone" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formPhone')} <span style={{ color: 'var(--muted)' }}>{t('formOptional')}</span>
        </label>
        <input
          id="demo-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder={t('formPlaceholderPhone')}
        />
      </div>
      <div>
        <label htmlFor="demo-tier" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formTier')}
        </label>
        <select
          id="demo-tier"
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
        >
          <option value="">{t('formSelect')}</option>
          {TIER_KEYS.map((key) => (
            <option key={key} value={key}>{t(key)}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="demo-message" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-soft)' }}>
          {t('formMessage')} <span style={{ color: 'var(--muted)' }}>{t('formOptional')}</span>
        </label>
        <textarea
          id="demo-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          placeholder={t('formPlaceholderMessage')}
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
        {t('formSubmit')}
      </button>
    </form>
  )
}
