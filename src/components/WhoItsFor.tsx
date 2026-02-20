import { Target, Building2 } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const personas = [
  {
    title: 'Recreational tech centers',
    subtitle: 'Primary fit',
    description: 'Higher engagement, a clear premium differentiator, and upsell experiences. Interactive games turn your space into a destination and support repeat visits.',
    bullets: ['Premium differentiator', 'Increases dwell time', 'Upsell and add-on potential', 'Shareable, memorable experiences'],
    icon: Target,
  },
  {
    title: 'Dental offices & waiting rooms',
    subtitle: 'Secondary fit',
    description: 'Calmer waiting, family-friendly content, and reliable plug & play. Especially the tablet tier: minimal footprint, low maintenance.',
    bullets: ['Calmer waiting experience', 'Family-friendly games', 'Plug & play reliability', 'Low footprint'],
    icon: Building2,
  },
] as const

export function WhoItsFor() {
  const { ref, visible } = useVisible()

  return (
    <section
      id="who-its-for"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      <Container>
        <SectionHeading
          title="Who it's for"
          subtitle="Built for venues that want to elevate engagement without clinical or therapeutic positioning."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
          {personas.map((p) => (
            <Card key={p.title} hover>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                >
                  <p.icon className="w-5 h-5" aria-hidden />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                  {p.subtitle}
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold mt-3" style={{ color: 'var(--text)' }}>
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {p.description}
              </p>
              <ul className="mt-4 space-y-2" role="list">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm" style={{ color: 'var(--text-soft)' }}>
                    <span style={{ color: 'var(--accent)' }} className="shrink-0">✓</span>
                    {b}
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
