import { Fragment, type RefObject } from 'react'
import { ChevronRight, Gamepad2, GitBranch, Lightbulb, HeartHandshake, type LucideIcon } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

/**
 * Step-specific visuals: each composition maps clearly to Play → Patterns → Insights → Better Support.
 * Uses CSS variables for brand accent; gradients are unique per instance via `uid`.
 */
function FlowIllustration({
  variant,
  label,
  uid,
}: {
  variant: 1 | 2 | 3 | 4
  label: string
  uid: string
}) {
  const a = 'var(--accent)'
  const soft = 'color-mix(in srgb, var(--accent) 30%, transparent)'
  const wash = 'color-mix(in srgb, var(--accent) 14%, transparent)'

  return (
    <div
      className="relative mx-auto mb-5 flex h-32 w-full max-w-[220px] items-center justify-center rounded-2xl border transition-colors duration-[var(--duration-theme)]"
      style={{
        borderColor: 'var(--border)',
        background: 'linear-gradient(165deg, var(--panel) 0%, var(--card-bg) 55%, color-mix(in srgb, var(--card-bg) 92%, var(--accent)) 100%)',
      }}
      role="img"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-60"
        style={{
          background: 'radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 50%)',
        }}
      />
      {/* 1 — Play: screen + engagement + controller (interaction / game environment) */}
      {variant === 1 && (
        <svg viewBox="0 0 200 132" className="relative z-[1] h-[5.5rem] w-[11rem] max-w-full" fill="none" aria-hidden>
          <defs>
            <linearGradient id={`${uid}-s1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={soft} />
              <stop offset="100%" stopColor={a} stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <rect x="28" y="16" width="144" height="82" rx="16" fill={wash} stroke={a} strokeOpacity="0.35" strokeWidth="1.5" />
          <rect x="40" y="28" width="120" height="58" rx="10" fill="color-mix(in srgb, var(--bg-elevated) 70%, transparent)" stroke={a} strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="100" cy="57" r="20" fill={`url(#${uid}-s1)`} />
          <path d="M93 50v14l12-7-12-7z" fill="#fff" fillOpacity="0.92" />
          <circle cx="158" cy="36" r="5" fill={a} fillOpacity="0.55" />
          <circle cx="42" cy="44" r="4" fill={a} fillOpacity="0.4" />
          <rect x="48" y="104" width="104" height="16" rx="8" fill={a} fillOpacity="0.2" />
          <circle cx="68" cy="112" r="5" fill={a} fillOpacity="0.45" />
          <circle cx="132" cy="112" r="5" fill={a} fillOpacity="0.45" />
        </svg>
      )}
      {/* 2 — Patterns: hub-and-spoke network + structured bars (data / connections) */}
      {variant === 2 && (
        <svg viewBox="0 0 200 132" className="relative z-[1] h-[5.5rem] w-[11rem] max-w-full" fill="none" aria-hidden>
          <circle cx="100" cy="62" r="11" fill={a} fillOpacity="0.6" />
          {[
            [54, 38],
            [146, 38],
            [44, 86],
            [156, 86],
            [100, 24],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="8" fill={soft} stroke={a} strokeOpacity="0.45" strokeWidth="1.2" />
          ))}
          <path
            d="M100 51V30 M100 73V98 M91 58L62 44 M109 58L138 44 M91 66L52 82 M109 66L148 82"
            stroke={a}
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.42"
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={62 + i * 16} y={108 - i * 5} width="10" height={10 + i * 5} rx="2" fill={a} fillOpacity={0.18 + i * 0.1} />
          ))}
        </svg>
      )}
      {/* 3 — Insights: lightbulb + glow + insight card (clarity / understanding) */}
      {variant === 3 && (
        <svg viewBox="0 0 200 132" className="relative z-[1] h-[5.5rem] w-[11rem] max-w-full" fill="none" aria-hidden>
          <defs>
            <radialGradient id={`${uid}-s3`}>
              <stop offset="0%" stopColor={a} stopOpacity="0.4" />
              <stop offset="100%" stopColor={a} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="50" r="38" fill={`url(#${uid}-s3)`} />
          <path
            d="M100 20c-14 0-25 11-25 24 0 9 5 17 12 21v8h26v-8c7-4 12-12 12-21 0-13-11-24-25-24z"
            fill={soft}
            stroke={a}
            strokeWidth="1.8"
            strokeOpacity="0.55"
          />
          <path d="M94 52h12M100 46v12" stroke={a} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
          <path d="M86 94h28v8a8 8 0 0 1-8 8h-12a8 8 0 0 1-8-8v-8z" fill={a} fillOpacity="0.32" />
          <rect x="56" y="108" width="88" height="16" rx="5" fill={wash} stroke={a} strokeOpacity="0.28" strokeWidth="1" />
          <rect x="66" y="114" width="40" height="2.5" rx="1" fill={a} fillOpacity="0.4" />
          <rect x="66" y="119" width="60" height="2.5" rx="1" fill={a} fillOpacity="0.22" />
        </svg>
      )}
      {/* 4 — Better Support: ascending steps + upward path (guidance / growth) */}
      {variant === 4 && (
        <svg viewBox="0 0 200 132" className="relative z-[1] h-[5.5rem] w-[11rem] max-w-full" fill="none" aria-hidden>
          <path
            d="M36 102 Q100 28 168 44"
            fill="none"
            stroke={a}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.35"
            strokeDasharray="4 6"
          />
          <rect x="32" y="88" width="44" height="20" rx="6" fill={wash} stroke={a} strokeOpacity="0.35" strokeWidth="1.2" />
          <rect x="78" y="72" width="44" height="36" rx="6" fill={soft} stroke={a} strokeOpacity="0.4" strokeWidth="1.2" />
          <rect x="124" y="52" width="44" height="56" rx="6" fill={a} fillOpacity="0.15" stroke={a} strokeOpacity="0.45" strokeWidth="1.2" />
          <circle cx="54" cy="98" r="5" fill={a} fillOpacity="0.55" />
          <circle cx="100" cy="88" r="5" fill={a} fillOpacity="0.65" />
          <circle cx="146" cy="72" r="6" fill={a} fillOpacity="0.75" />
          <path d="M142 38l8-10 8 10M146 28v16" stroke={a} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" />
        </svg>
      )}
    </div>
  )
}

const STEP_ICONS: LucideIcon[] = [Gamepad2, GitBranch, Lightbulb, HeartHandshake]

const STEP_KEYS = ['homeHowStep1Desc', 'homeHowStep2Desc', 'homeHowStep3Desc', 'homeHowStep4Desc'] as const
const ILLUST_ALT_KEYS = ['homeHowIllust1Alt', 'homeHowIllust2Alt', 'homeHowIllust3Alt', 'homeHowIllust4Alt'] as const

type HomeHowItWorksProps = {
  sectionTitle: string
  stepTitles: [string, string, string, string]
}

export function HomeHowItWorks({ sectionTitle, stepTitles }: HomeHowItWorksProps) {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  const steps = stepTitles.map((title, i) => ({
    title,
    desc: t(STEP_KEYS[i]),
    illust: (i + 1) as 1 | 2 | 3 | 4,
    illustAlt: t(ILLUST_ALT_KEYS[i]),
    Icon: STEP_ICONS[i]!,
  }))

  return (
    <section
      id="how-it-works"
      ref={ref as RefObject<HTMLDivElement>}
      aria-labelledby="home-how-heading"
      className={`section-padding-tight relative overflow-hidden transition-all ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'
      }`}
      style={{
        backgroundColor: 'var(--bg-elevated)',
        transitionDuration: '400ms',
        transitionTimingFunction: 'var(--ease-smooth)',
        backgroundImage:
          'radial-gradient(ellipse 100% 60% at 100% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent), radial-gradient(ellipse 80% 50% at 0% 100%, color-mix(in srgb, var(--accent) 6%, transparent), transparent)',
      }}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="home-how-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            {sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('homeHowItWorksSubtitle')}
          </p>
        </div>

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-stretch lg:justify-center gap-6 lg:gap-0">
          {steps.map((step, index) => {
            const StepIcon = step.Icon
            return (
              <Fragment key={step.title}>
                <Card
                  hover
                  className="flex-1 min-w-0 lg:max-w-[280px] flex flex-col text-center lg:text-left"
                  padding="md"
                >
                  <FlowIllustration variant={step.illust} label={step.illustAlt} uid={`hiw-${index}`} />
                  <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                      style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <StepIcon className="h-5 w-5 shrink-0" style={{ color: 'var(--accent)' }} aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text)' }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {step.desc}
                  </p>
                </Card>
                {index < steps.length - 1 ? (
                  <div className="hidden lg:flex items-center justify-center px-1 shrink-0 self-center" aria-hidden>
                    <ChevronRight className="h-6 w-6" style={{ color: 'var(--accent)', opacity: 0.45 }} />
                  </div>
                ) : null}
              </Fragment>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
