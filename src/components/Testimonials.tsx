import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Quote } from 'lucide-react'

const QUOTE_KEYS = [
  { quoteKey: 'quote1', attribKey: 'quote1Attrib', locKey: 'quote1Loc' },
  { quoteKey: 'quote2', attribKey: 'quote2Attrib', locKey: 'quote2Loc' },
] as const

export function Testimonials() {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container narrow>
        <SectionHeading
          title={t('testimonialTitle')}
          subtitle={t('testimonialSubtitle')}
        />
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {QUOTE_KEYS.map((q) => (
            <Card key={q.quoteKey} hover>
              <Quote className="w-8 h-8 mb-4" style={{ color: 'var(--accent)', opacity: 0.7 }} aria-hidden />
              <p className="leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                &ldquo;{t(q.quoteKey)}&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="not-italic font-semibold" style={{ color: 'var(--text)' }}>{t(q.attribKey)}</cite>
                <span className="text-sm ml-1" style={{ color: 'var(--muted)' }}> — {t(q.locKey)}</span>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
