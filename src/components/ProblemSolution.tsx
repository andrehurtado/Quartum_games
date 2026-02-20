import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Check, Minus } from 'lucide-react'

const problems = [
  'Boredom in waiting areas — guests disengage and time drags.',
  'Underutilized spaces — corners and lounges that could drive value sit empty.',
  'Need for differentiation — venues want memorable, shareable experiences.',
  'Repeat visits — keeping regulars engaged and coming back.',
]

const solutions = [
  'Turnkey interactive systems you can install and run with minimal effort.',
  'A rotating, curated game catalog so content stays fresh.',
  'Ongoing support and maintenance so you focus on your guests, not the tech.',
]

export function ProblemSolution() {
  const { ref, visible } = useVisible()

  return (
    <section
      id="problem"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      <Container narrow>
        <SectionHeading
          title="From underused space to engaged guests"
          subtitle="Waiting areas and recreational spaces often miss the chance to turn downtime into memorable moments. Quartum Games turns that around."
        />
        <div className="mt-12 grid sm:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--muted)' }}
            >
              The challenge
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm" style={{ color: 'var(--text-soft)' }}>
                  <Minus className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--muted)' }} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--accent)' }}
            >
              Our solution
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {solutions.map((s) => (
                <li key={s} className="flex gap-3 text-sm" style={{ color: 'var(--text-soft)' }}>
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
