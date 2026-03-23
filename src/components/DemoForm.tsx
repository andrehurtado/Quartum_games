import { useState, FormEvent } from 'react'
import { Loader2 } from 'lucide-react'
import { trackCTA } from '@/analytics'
import { useLocale } from '@/contexts/LocaleContext'

const BUSINESS_KEYS = ['formBusiness1', 'formBusiness2', 'formBusiness3'] as const
const TIER_KEYS = ['formTier1', 'formTier2', 'formTier3', 'formTier4'] as const

const ENDPOINT = '/api/demo-request'

const inputClass =
  'w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]'

export function DemoForm() {
  const { t, locale } = useLocale()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [name, setName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [cityCountry, setCityCountry] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [tier, setTier] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')

  const localizedStatus = {
    en: {
      genericError: 'We could not submit your request right now. Please try again in a moment.',
      sending: 'Sending...',
      messageRequired: 'Message is required.',
      success: 'Your message has been sent successfully.',
    },
    es: {
      genericError: 'No pudimos enviar tu solicitud ahora mismo. Inténtalo de nuevo en un momento.',
      sending: 'Enviando...',
      messageRequired: 'El mensaje es obligatorio.',
      success: 'Tu mensaje se ha enviado correctamente.',
    },
    de: {
      genericError: 'Ihre Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es gleich erneut.',
      sending: 'Wird gesendet...',
      messageRequired: 'Nachricht ist erforderlich.',
      success: 'Ihre Nachricht wurde erfolgreich gesendet.',
    },
  }[locale]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!message.trim()) {
      setSubmitError(localizedStatus.messageRequired)
      return
    }

    setSubmitting(true)
    setSubmitError('')

    const data = {
      name,
      businessType,
      cityCountry,
      email,
      phone,
      tier,
      message,
      website,
      sourcePage: window.location.pathname,
    }

    trackCTA({ type: 'cta_click', label: 'Demo form submit', section: 'demo_form' })

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const responseData = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitError(
          typeof responseData?.message === 'string' && responseData.message.trim()
            ? responseData.message
            : localizedStatus.genericError,
        )
        return
      }
      setSubmitted(true)
      setName('')
      setBusinessType('')
      setCityCountry('')
      setEmail('')
      setPhone('')
      setTier('')
      setMessage('')
      setWebsite('')
    } catch {
      setSubmitError(localizedStatus.genericError)
    } finally {
      setSubmitting(false)
    }
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
        <p className="mt-2 text-sm" style={{ color: 'var(--text-soft)' }} role="status" aria-live="polite">
          {localizedStatus.success}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
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
          {t('formMessage')} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <textarea
          id="demo-message"
          rows={3}
          required
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
        disabled={submitting}
        aria-busy={submitting}
        className="w-full rounded-lg border py-3.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] inline-flex items-center justify-center gap-2"
        style={{
          borderColor: 'var(--border-strong)',
          color: 'var(--text-soft)',
          opacity: submitting ? 0.7 : 1,
          cursor: submitting ? 'not-allowed' : 'pointer',
        }}
      >
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden /> : null}
        {submitting ? localizedStatus.sending : t('formSubmit')}
      </button>
      {submitError ? (
        <p className="text-sm" role="alert" aria-live="assertive" style={{ color: '#dc2626' }}>
          {submitError}
        </p>
      ) : null}
    </form>
  )
}
