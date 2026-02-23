import { PRICING_LABELS, PRICING_NOTE } from '@/constants'
import { trackCTA } from '@/analytics'
import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { HardwarePlaceholder } from '@/components/HardwarePlaceholder'
import { ChevronRight } from 'lucide-react'

const TIERS = [
  {
    id: 'tier-1',
    name: 'Tablet Station',
    tagline: 'Plug & play',
    variant: 'tablet' as const,
    description: 'Lower service burden, minimal setup. Ideal for smaller spaces or multiple touchpoints.',
    bestFor: 'Waiting rooms, small lounges, multiple stations',
    includes: ['Hardware (tablet station)', 'Curated game catalog access', 'Regular updates', 'Maintenance contract'],
    pricingLabel: PRICING_LABELS.tablet,
  },
  {
    id: 'tier-2',
    name: 'Arcade + Projector',
    tagline: 'Light installation',
    variant: 'arcade' as const,
    description: 'Mid-tier setup with arcade unit and projector. More presence, still manageable install.',
    bestFor: 'Recreational tech centers, family zones, mid-size venues',
    includes: ['Arcade unit + projector', 'Curated game catalog access', 'Regular updates', 'Maintenance contract'],
    pricingLabel: PRICING_LABELS.arcadeProjector,
  },
  {
    id: 'tier-3',
    name: 'Full Projection System',
    tagline: 'Premium install',
    variant: 'projection' as const,
    description: 'High-impact projection experience. Higher complexity, maximum engagement.',
    bestFor: 'Premium tech centers, flagship locations, large experiential spaces',
    includes: ['Full projection hardware', 'Curated game catalog access', 'Regular updates', 'Maintenance contract'],
    pricingLabel: PRICING_LABELS.fullProjection,
  },
] as const

export function HardwareTiers() {
  const { ref, visible } = useVisible()

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
          title="Hardware tiers for every space"
          subtitle="Choose the level that fits your venue — from plug & play tablet stations to full projection systems."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((tier) => (
            <Card key={tier.id} hover padding="none">
              <div className="overflow-hidden rounded-t-2xl h-44 sm:h-52">
                <HardwarePlaceholder variant={tier.variant} className="h-full w-full rounded-t-2xl rounded-b-none" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col">
                <Badge className="w-fit">{tier.tagline}</Badge>
                <h3 className="font-display text-xl font-semibold mt-3" style={{ color: 'var(--text)' }}>
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {tier.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  Best for
                </p>
                <p className="text-sm" style={{ color: 'var(--text-soft)' }}>{tier.bestFor}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  What you get
                </p>
                <ul className="mt-2 space-y-1.5 text-sm" role="list" style={{ color: 'var(--text-soft)' }}>
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span style={{ color: 'var(--accent)' }} className="shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
                  {tier.pricingLabel}
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
                  Get a quote
                  <ChevronRight className="w-4 h-4" aria-hidden />
                </button>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm max-w-2xl" style={{ color: 'var(--muted)' }}>
          {PRICING_NOTE}
        </p>
      </Container>
    </section>
  )
}
