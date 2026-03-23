import { useId, type RefObject } from 'react'
import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

type PillarKind = 'play' | 'patterns' | 'insight'

function PillarVisual({ kind, uid }: { kind: PillarKind; uid: string }) {
  const a = 'var(--accent)'
  const soft = 'color-mix(in srgb, var(--accent) 28%, transparent)'
  const muted = 'color-mix(in srgb, var(--accent) 12%, transparent)'

  return (
    <div
      className="relative mb-6 flex h-36 w-full items-center justify-center rounded-2xl border overflow-hidden transition-[box-shadow,transform] duration-[var(--duration-theme)] group-hover:shadow-[var(--shadow-soft)]"
      style={{
        borderColor: 'var(--border)',
        background:
          'linear-gradient(165deg, var(--panel) 0%, color-mix(in srgb, var(--card-bg) 85%, var(--accent)) 100%)',
      }}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 55%)',
        }}
      />
      {kind === 'play' && (
        <svg viewBox="0 0 200 120" className="relative z-[1] h-28 w-44 max-w-full" fill="none">
          <defs>
            <linearGradient id={`${uid}-p-g`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={soft} />
              <stop offset="100%" stopColor={a} stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Screen / play surface */}
          <rect x="36" y="18" width="128" height="72" rx="14" fill={muted} stroke={a} strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="100" cy="54" r="22" fill={`url(#${uid}-p-g)`} opacity="0.85" />
          <path d="M94 46 L94 62 L108 54 Z" fill="#fff" fillOpacity="0.95" />
          {/* Controller base */}
          <rect x="52" y="94" width="96" height="18" rx="9" fill={a} fillOpacity="0.22" />
          <circle cx="72" cy="103" r="5" fill={a} fillOpacity="0.45" />
          <circle cx="128" cy="103" r="5" fill={a} fillOpacity="0.45" />
          {/* Engagement dots */}
          <circle cx="156" cy="34" r="4" fill={a} fillOpacity="0.5" />
          <circle cx="44" cy="42" r="3" fill={a} fillOpacity="0.35" />
        </svg>
      )}
      {kind === 'patterns' && (
        <svg viewBox="0 0 200 120" className="relative z-[1] h-28 w-44 max-w-full" fill="none">
          {/* Structured network */}
          <circle cx="100" cy="58" r="10" fill={a} fillOpacity="0.55" />
          {[
            [52, 38],
            [148, 38],
            [40, 78],
            [160, 78],
            [100, 22],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="7" fill={soft} stroke={a} strokeOpacity="0.4" strokeWidth="1.2" />
          ))}
          <path
            d="M100 48 V32 M100 68 V88 M92 54 L59 42 M108 54 L141 42 M92 62 L47 74 M108 62 L153 74"
            stroke={a}
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
          {/* Mini rhythm bars */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={68 + i * 14}
              y={100 - (8 + i * 4)}
              width="8"
              height={8 + i * 4}
              rx="2"
              fill={a}
              fillOpacity={0.2 + i * 0.08}
            />
          ))}
        </svg>
      )}
      {kind === 'insight' && (
        <svg viewBox="0 0 200 120" className="relative z-[1] h-28 w-44 max-w-full" fill="none">
          <defs>
            <radialGradient id={`${uid}-i-g`}>
              <stop offset="0%" stopColor={a} stopOpacity="0.35" />
              <stop offset="100%" stopColor={a} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="48" r="36" fill={`url(#${uid}-i-g)`} />
          {/* Bulb */}
          <path
            d="M100 22c-12 0-22 10-22 22 0 8 4 15 10 19v6h24v-6c6-4 10-11 10-19 0-12-10-22-22-22z"
            fill={soft}
            stroke={a}
            strokeWidth="1.8"
            strokeOpacity="0.55"
          />
          <path d="M88 86h24v6a6 6 0 0 1-6 6h-12a6 6 0 0 1-6-6v-6z" fill={a} fillOpacity="0.35" />
          {/* Clarity rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const r = (deg * Math.PI) / 180
            const x1 = 100 + Math.cos(r) * 42
            const y1 = 48 + Math.sin(r) * 42
            const x2 = 100 + Math.cos(r) * 52
            const y2 = 48 + Math.sin(r) * 52
            return (
              <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={a} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
            )
          })}
          {/* Takeaway card */}
          <rect x="58" y="96" width="84" height="14" rx="4" fill={muted} stroke={a} strokeOpacity="0.25" strokeWidth="1" />
          <rect x="66" y="101" width="36" height="2" rx="1" fill={a} fillOpacity="0.35" />
          <rect x="66" y="105" width="52" height="2" rx="1" fill={a} fillOpacity="0.2" />
        </svg>
      )}
    </div>
  )
}

export type WhatWeDoCard = {
  headline: string
  description: string
  kind: PillarKind
}

type HomeWhatWeDoProps = {
  title: string
  subtitle: string
  cards: [WhatWeDoCard, WhatWeDoCard, WhatWeDoCard]
}

export function HomeWhatWeDo({ title, subtitle, cards }: HomeWhatWeDoProps) {
  const baseId = useId().replace(/:/g, '')
  const { ref, visible } = useVisible()

  return (
    <section
      ref={ref as RefObject<HTMLDivElement>}
      aria-labelledby="home-what-heading"
      className={`section-padding-tight transition-all ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'
      }`}
      style={{
        backgroundColor: 'var(--bg)',
        transitionDuration: '400ms',
        transitionTimingFunction: 'var(--ease-smooth)',
        backgroundImage:
          'radial-gradient(ellipse 90% 60% at 50% -10%, color-mix(in srgb, var(--accent) 7%, transparent), transparent)',
      }}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <h2
            id="home-what-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {cards.map((card, index) => (
            <Card
              key={card.headline}
              hover
              className="group flex h-full flex-col text-center md:text-left"
              padding="md"
            >
              <PillarVisual kind={card.kind} uid={`${baseId}-w${index}`} />
              <h3 className="font-display text-lg font-semibold sm:text-xl" style={{ color: 'var(--text)' }}>
                {card.headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-[0.9375rem]" style={{ color: 'var(--text-secondary)' }}>
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
