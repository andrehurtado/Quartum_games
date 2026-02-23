import { CONTACT } from '@/constants'
import { trackCTA } from '@/analytics'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const { t } = useLocale()
  const mailto = `mailto:${CONTACT.salesEmail}`

  return (
    <footer
      className="section-padding-tight border-t"
      style={{
        backgroundColor: 'var(--bg-elevated)',
        borderColor: 'var(--border)',
      }}
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <p className="font-display font-semibold" style={{ color: 'var(--text)' }}>
              {t('company')}
            </p>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('company')} {t('footerSubsidiary')} {t('parent')}. {t('regionNote')}
            </p>
          </div>
          <div className="text-sm">
            <a
              href={mailto}
              onClick={() => trackCTA({ type: 'cta_click', label: 'Email', section: 'footer' })}
              className="transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)] rounded w-fit inline-block"
              style={{ color: 'var(--text-secondary)' }}
            >
              {CONTACT.salesEmail}
            </a>
            {CONTACT.phone && (
              <span className="block mt-1" style={{ color: 'var(--text-secondary)' }}>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded">
                  {CONTACT.phone}
                </a>
              </span>
            )}
          </div>
        </div>
        <div
          className="mt-10 pt-8 text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}
        >
          {t('footerCopyright')} {new Date().getFullYear()} {t('company')}.
        </div>
      </Container>
    </footer>
  )
}
