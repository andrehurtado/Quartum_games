import { Gamepad2 } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const CATEGORIES = [
  { name: 'Reaction', description: 'Quick reflexes, short sessions' },
  { name: 'Coordination', description: 'Hand–eye and timing' },
  { name: 'Puzzles', description: 'Logic and focus' },
  { name: 'Family-friendly', description: 'All ages, low barrier' },
  { name: 'Short-session', description: 'Designed for waiting and drop-in play' },
] as const

const SAMPLE_GAMES = [
  { title: 'Reflex Grid', category: 'Reaction' },
  { title: 'Balance Quest', category: 'Coordination' },
  { title: 'Puzzle Blocks', category: 'Puzzles' },
  { title: 'Family Match', category: 'Family-friendly' },
  { title: 'Quick Catch', category: 'Short-session' },
  { title: 'Timing Rush', category: 'Reaction' },
] as const

export function GameCatalog() {
  const { ref, visible } = useVisible()

  return (
    <section
      id="catalog"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      <Container>
        <SectionHeading
          title="Curated game catalog"
          subtitle="Recreation-focused experiences — no metrics or clinical use. Just engaging, atmospheric games that fit your space."
        />
        <div className="mt-8">
          <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-soft)' }}>Categories</p>
          <ul className="flex flex-wrap gap-2" role="list">
            {CATEGORIES.map((cat) => (
              <li
                key={cat.name}
                className="rounded-full px-4 py-2 text-sm border"
                style={{
                  backgroundColor: 'var(--panel)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-soft)',
                }}
              >
                {cat.name} — {cat.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-soft)' }}>Sample titles (preview)</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SAMPLE_GAMES.map((game) => (
              <Card key={game.title} hover padding="none">
                <div
                  className="aspect-[3/4] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(145deg, var(--panel-hover) 0%, var(--panel) 100%)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: 'var(--muted)' }} aria-hidden />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm truncate" style={{ color: 'var(--text)' }}>{game.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{game.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm" style={{ color: 'var(--muted)' }}>
          The full catalog is included in your subscription and updated regularly. No extra per-game fees.
        </p>
      </Container>
    </section>
  )
}
