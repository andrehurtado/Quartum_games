import { Fragment } from 'react'
import { ChevronRight, Gamepad2, GitBranch, Lightbulb, Sparkles, type LucideIcon } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

function FlowIllustration({
  variant,
  label,
  uid,
}: {
  variant: 1 | 2 | 3 | 4
  label: string
  /** Unique prefix so gradient IDs don’t collide across multiple SVGs. */
  uid: string
}) {
  const accent = 'var(--accent)'
  const soft = 'color-mix(in srgb, var(--accent) 35%, transparent)'
  const panel = 'var(--panel)'

  return (
    <div
      className="relative mx-auto mb-5 flex h-28 w-full max-w-[200px] items-center justify-center rounded-2xl border transition-colors duration-[var(--duration-theme)]"
      style={{
        borderColor: 'var(--border)',
        background: `linear-gradient(160deg, ${panel} 0%, var(--card-bg) 100%)`,
      }}
      role="img"
      aria-label={label}
    >
      {variant === 1 && (
        <svg viewBox="0 0 120 100" className="h-20 w-24" aria-hidden>
          <defs>
            <linearGradient id={`${uid}-g1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={soft} />
              <stop offset="100%" stopColor={accent} stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="50" r="22" fill={`url(#${uid}-g1)`} opacity="0.9" />
          <circle cx="78" cy="38" r="14" fill={accent} opacity="0.35" />
          <path d="M55 72h28a6 6 0 0 1 6 6v6H49v-6a6 6 0 0 1 6-6z" fill={accent} opacity="0.5" />
        </svg>
      )}
      {variant === 2 && (
        <svg viewBox="0 0 120 100" className="h-20 w-24" aria-hidden>
          <path
            d="M12 78 C 35 20, 85 20, 108 78"
            fill="none"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
          />
          <circle cx="32" cy="48" r="8" fill={soft} />
          <circle cx="60" cy="32" r="10" fill={accent} opacity="0.55" />
          <circle cx="88" cy="52" r="7" fill={accent} opacity="0.35" />
        </svg>
      )}
      {variant === 3 && (
        <svg viewBox="0 0 120 100" className="h-20 w-24" aria-hidden>
          <circle cx="60" cy="42" r="26" fill={soft} />
          <path d="M60 22 L68 48 L60 42 L52 48 Z" fill={accent} opacity="0.75" />
          <circle cx="60" cy="78" r="4" fill={accent} opacity="0.5" />
          <circle cx="42" cy="68" r="3" fill={accent} opacity="0.35" />
          <circle cx="78" cy="68" r="3" fill={accent} opacity="0.35" />
        </svg>
      )}
      {variant === 4 && (
        <svg viewBox="0 0 120 100" className="h-20 w-24" aria-hidden>
          <path
            d="M24 62 Q 60 28 96 62"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <rect x="28" y="48" width="64" height="28" rx="8" fill={soft} />
          <circle cx="48" cy="62" r="6" fill={accent} opacity="0.55" />
          <circle cx="72" cy="62" r="6" fill={accent} opacity="0.35" />
        </svg>
      )}
    </div>
  )
}

const STEP_ICONS: LucideIcon[] = [Gamepad2, GitBranch, Lightbulb, Sparkles]

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
      ref={ref as React.RefObject<HTMLDivElement>}
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
                <div
                  className="hidden lg:flex items-center justify-center px-1 shrink-0 self-center"
                  aria-hidden
                >
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
