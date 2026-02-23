import { trackCTA } from '@/analytics'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { HardwarePlaceholder } from '@/components/HardwarePlaceholder'
import { ChevronRight } from 'lucide-react'

const TIER_CONFIG = [
  {
    id: 'tier-1',
    variant: 'tablet' as const,
    nameKey: 'tierTablet',
    tagKey: 'tierTabletTag',
    descKey: 'tierTabletDesc',
    bestKey: 'tierTabletBest',
    pricingKey: 'pricingTablet',
    includes: ['includeHardwareTablet', 'includeCatalog', 'includeUpdates', 'includeMaintenance'] as const,
  },
  {
    id: 'tier-2',
    variant: 'arcade' as const,
    nameKey: 'tierArcade',
    tagKey: 'tierArcadeTag',
    descKey: 'tierArcadeDesc',
    bestKey: 'tierArcadeBest',
    pricingKey: 'pricingArcade',
    includes: ['includeArcade', 'includeCatalog', 'includeUpdates', 'includeMaintenance'] as const,
  },
  {
    id: 'tier-3',
    variant: 'projection' as const,
    nameKey: 'tierProjection',
    tagKey: 'tierProjectionTag',
    descKey: 'tierProjectionDesc',
    bestKey: 'tierProjectionBest',
    pricingKey: 'pricingProjection',
    includes: ['includeProjection', 'includeCatalog', 'includeUpdates', 'includeMaintenance'] as const,
  },
] as const

export function HardwareTiers() {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  const scrollToDemo = () => {
    trackCTA({ type: 'cta_click', label: 'Schedule a walkthrough', section: 'hardware_tiers' })
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="tiers"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container>
        <SectionHeading
          title={t('tiersTitle')}
          subtitle={t('tiersSubtitle')}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {TIER_CONFIG.map((tier) => (
            <Card key={tier.id} hover padding="none">
              <div className="overflow-hidden rounded-t-2xl h-44 sm:h-52">
                <HardwarePlaceholder variant={tier.variant} className="h-full w-full rounded-t-2xl rounded-b-none" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col">
                <Badge className="w-fit">{t(tier.tagKey)}</Badge>
                <h3 className="font-display text-xl font-semibold mt-3" style={{ color: 'var(--text)' }}>
                  {t(tier.nameKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {t(tier.descKey)}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  {t('bestFor')}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-soft)' }}>{t(tier.bestKey)}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  {t('whatYouGet')}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm" role="list" style={{ color: 'var(--text-soft)' }}>
                  {tier.includes.map((key) => (
                    <li key={key} className="flex gap-2">
                      <span style={{ color: 'var(--accent)' }} className="shrink-0">✓</span>
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
                  {t(tier.pricingKey)}
                </p>
                <button
                  type="button"
                  onClick={scrollToDemo}
                  className="mt-6 flex items-center gap-2 text-sm font-medium rounded-lg border px-4 py-2.5 w-full justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  style={{
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-soft)',
                  }}
                >
                  {t('getAQuote')}
                  <ChevronRight className="w-4 h-4" aria-hidden />
                </button>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm max-w-2xl" style={{ color: 'var(--muted)' }}>
          {t('pricingNote')}
        </p>
      </Container>
    </section>
  )
}
