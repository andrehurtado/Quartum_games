import { Mail } from 'lucide-react'
import { CONTACT } from '@/constants'
import { DEMO_CTA_LABEL } from '@/constants'
import { trackCTA } from '@/analytics'
import { DemoForm } from './DemoForm'
import { Container } from '@/components/ui/Container'

export function FinalCTA() {
  const mailto = `mailto:${CONTACT.salesEmail}`

  const scrollToForm = () => {
    const formEl = document.getElementById('demo-form')
    formEl?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="demo"
      className="section-padding scroll-mt-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <Container narrow>
        <h2
          className="font-display text-2xl sm:text-3xl font-bold text-center"
          style={{ color: 'var(--text)' }}
        >
          See it in action
        </h2>
        <p
          className="mt-2 text-center max-w-xl mx-auto"
          style={{ color: 'var(--text-soft)' }}
        >
          Tell us about your venue and we'll get back with a tailored quote and next steps.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={mailto}
            onClick={() => trackCTA({ type: 'cta_click', label: 'Email Us', section: 'final_cta' })}
            className="inline-flex items-center gap-2 rounded-lg font-semibold px-6 py-3.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg)',
            }}
          >
            <Mail className="w-5 h-5" aria-hidden />
            Email Us
          </a>
          <button
            type="button"
            onClick={() => {
              trackCTA({ type: 'cta_click', label: DEMO_CTA_LABEL, section: 'final_cta' })
              scrollToForm()
            }}
            className="inline-flex items-center rounded-lg border px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text-soft)',
            }}
          >
            {DEMO_CTA_LABEL}
          </button>
        </div>
        <div id="demo-form" className="mt-12 max-w-lg mx-auto">
          <DemoForm />
        </div>
      </Container>
    </section>
  )
}
