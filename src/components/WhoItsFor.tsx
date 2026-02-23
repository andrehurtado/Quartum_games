import { Target, Building2 } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const PERSONAS = [
  {
    subtitleKey: 'whoPrimary',
    titleKey: 'whoTechTitle',
    descKey: 'whoTechDesc',
    bulletKeys: ['whoTech1', 'whoTech2', 'whoTech3', 'whoTech4'] as const,
    icon: Target,
  },
  {
    subtitleKey: 'whoSecondary',
    titleKey: 'whoDentalTitle',
    descKey: 'whoDentalDesc',
    bulletKeys: ['whoDental1', 'whoDental2', 'whoDental3', 'whoDental4'] as const,
    icon: Building2,
  },
] as const

export function WhoItsFor() {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  return (
    <section
      id="who-its-for"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg-elevated)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container>
        <SectionHeading
          title={t('whoTitle')}
          subtitle={t('whoSubtitle')}
        />
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
          {PERSONAS.map((p) => (
            <Card key={p.titleKey} hover>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                >
                  <p.icon className="w-5 h-5" aria-hidden />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                  {t(p.subtitleKey)}
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold mt-3" style={{ color: 'var(--text)' }}>
                {t(p.titleKey)}
              </h3>
              <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {t(p.descKey)}
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {p.bulletKeys.map((key) => (
                  <li key={key} className="flex gap-2 text-sm" style={{ color: 'var(--text-soft)' }}>
                    <span style={{ color: 'var(--accent)' }} className="shrink-0">✓</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
