import { Container } from '@/components/ui/Container'
import { useParallax } from '@/hooks/useParallax'

const SHOWCASE_ITEMS = [
  {
    id: 'tablet',
    name: 'Tablet Station',
    tagline: 'Plug & play',
  },
  {
    id: 'arcade',
    name: 'Arcade + Projector',
    tagline: 'Light install',
  },
  {
    id: 'projection',
    name: 'Full Projection System',
    tagline: 'Premium',
  },
] as const

function ProductPlaceholder({
  variant,
  parallaxY,
  className = '',
}: {
  variant: 'tablet' | 'arcade' | 'projection'
  parallaxY: number
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--shadow-soft)',
        transform: `translateY(${parallaxY}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
      {variant === 'tablet' && <TabletVisual />}
      {variant === 'arcade' && <ArcadeVisual />}
      {variant === 'projection' && <ProjectionVisual />}
    </div>
  )
}

function TabletVisual() {
  return (
    <div className="relative w-full flex justify-center items-end py-12 sm:py-16">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full opacity-80"
        style={{
          background: 'var(--text-secondary)',
          opacity: 0.15,
          filter: 'blur(2px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}
      />
      <div
        className="relative w-32 sm:w-40 aspect-[3/4] rounded-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.25), 0 0 0 1px var(--card-border)',
          border: '1px solid var(--card-border)',
        }}
      >
        <div
          className="w-[65%] h-[45%] rounded-xl opacity-60"
          style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, transparent 100%)',
            opacity: 0.12,
            border: '1px solid var(--card-border)',
          }}
        />
      </div>
    </div>
  )
}

function ArcadeVisual() {
  return (
    <div className="relative w-full flex justify-center items-end py-10 sm:py-14">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-5 rounded-full opacity-80"
        style={{
          background: 'var(--text-secondary)',
          opacity: 0.12,
          filter: 'blur(2px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      />
      <div
        className="relative w-28 sm:w-36 rounded-t-2xl flex flex-col items-center pt-6 pb-4"
        style={{
          height: '140px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px var(--card-border)',
          border: '1px solid var(--card-border)',
          borderBottom: 'none',
        }}
      >
        <div
          className="w-20 h-12 rounded-lg mb-3"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid var(--card-border)',
          }}
        />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: 'var(--accent)', opacity: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectionVisual() {
  return (
    <div className="relative w-full flex flex-col items-center justify-end py-10 sm:py-14">
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-20 opacity-10"
        style={{
          background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <div
        className="relative w-36 sm:w-44 h-20 rounded-xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px var(--card-border)',
          border: '1px solid var(--card-border)',
        }}
      >
        <div
          className="w-14 h-8 rounded-full opacity-40"
          style={{ background: 'var(--accent)' }}
        />
      </div>
      <div
        className="w-6 h-12 rounded-b-md"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  )
}

export function HardwareShowcase() {
  const { ref, offset } = useParallax(0.03)

  return (
    <section
      id="showcase"
      ref={ref}
      className="section-padding scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            Hardware
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Three tiers for every space — from plug & play to full projection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {SHOWCASE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="animate-in hover-lift rounded-2xl"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProductPlaceholder
                variant={item.id as 'tablet' | 'arcade' | 'projection'}
                parallaxY={offset}
                className="aspect-[4/5] sm:aspect-square"
              />
              <p
                className="mt-6 text-center font-display font-semibold text-lg"
                style={{ color: 'var(--text)' }}
              >
                {item.name}
              </p>
              <p
                className="mt-1 text-center text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.tagline}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
