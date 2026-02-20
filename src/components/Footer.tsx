import { Mail, ChevronRight } from 'lucide-react'
import { CONTACT, BRAND, DEMO_CTA_LABEL } from '@/constants'
import { trackCTA } from '@/analytics'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const mailto = `mailto:${CONTACT.salesEmail}`

  const scrollToDemo = () => {
    trackCTA({ type: 'cta_click', label: DEMO_CTA_LABEL, section: 'footer' })
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="section-padding border-t"
      style={{
        backgroundColor: 'var(--bg-elevated)',
        borderColor: 'var(--border)',
      }}
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <p className="font-display font-semibold" style={{ color: 'var(--text)' }}>
              {BRAND.company}
            </p>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-soft)' }}>
              {BRAND.company} is a subsidiary of {BRAND.parent}.
            </p>
            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
              {BRAND.regionNote}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="font-medium" style={{ color: 'var(--text)' }}>Contact</p>
            <a
              href={mailto}
              onClick={() => trackCTA({ type: 'cta_click', label: 'Email Us', section: 'footer' })}
              className="inline-flex items-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)] rounded w-fit"
              style={{ color: 'var(--accent)' }}
            >
              <Mail className="w-4 h-4" aria-hidden />
              {CONTACT.salesEmail}
            </a>
            {CONTACT.phone && (
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)] rounded w-fit"
                style={{ color: 'var(--accent)' }}
              >
                {CONTACT.phone}
              </a>
            )}
            <button
              type="button"
              onClick={scrollToDemo}
              className="inline-flex items-center gap-2 mt-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)] rounded w-fit"
              style={{ color: 'var(--text-soft)' }}
            >
              {DEMO_CTA_LABEL}
              <ChevronRight className="w-4 h-4" aria-hidden />
            </button>
          </div>
        </div>
        <div
          className="mt-10 pt-8 text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)', borderTop: '1px solid var(--border)' }}
        >
          © {new Date().getFullYear()} {BRAND.company}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
