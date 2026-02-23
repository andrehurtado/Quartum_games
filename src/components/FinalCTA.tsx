import { Mail } from 'lucide-react'
import { CONTACT } from '@/constants'
import { trackCTA } from '@/analytics'
import { useLocale } from '@/contexts/LocaleContext'
import { DemoForm } from './DemoForm'
import { Container } from '@/components/ui/Container'

export function FinalCTA() {
  const { t } = useLocale()
  const mailto = `mailto:${CONTACT.salesEmail}`

  return (
    <section
      id="demo"
      className="section-padding scroll-mt-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <Container narrow>
        <div className="text-center max-w-xl mx-auto">
          <h2
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            {t('ctaTitle')}
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('ctaEmailLine')}
          </p>
          <a
            href={mailto}
            onClick={() => trackCTA({ type: 'cta_click', label: 'Email', section: 'final_cta' })}
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            <Mail className="w-4 h-4" aria-hidden />
            {CONTACT.salesEmail}
          </a>
          <p className="mt-8 text-base" style={{ color: 'var(--text-secondary)' }}>
            {t('ctaBrochureLine')}{' '}
            <a
              href="/extras/QUARTUMGROUP_CENTROS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded"
              style={{ color: 'var(--accent)' }}
            >
              {t('ctaBrochureLink')}
            </a>
          </p>
        </div>
        <div id="demo-form" className="mt-16 max-w-lg mx-auto">
          <p className="text-center text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            {t('ctaWalkthrough')}
          </p>
          <DemoForm />
        </div>
      </Container>
    </section>
  )
}
