import type { ReactNode } from 'react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'

const PABLO_IMG = '/extras/Pablo_portrait.png'
/** Matches `public/extras/Andre_portrait.jpeg` (also available as .jpg). */
const ANDRE_IMG = '/extras/Andre_portrait.jpeg'

function TeamProfile({
  name,
  imageSrc,
  imageAlt,
  children,
}: {
  name: string
  imageSrc: string
  imageAlt: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
      <div className="lg:col-span-4 flex justify-center lg:justify-start">
        <div
          className="relative w-full max-w-sm lg:max-w-none rounded-2xl overflow-hidden transition-[box-shadow,transform] duration-[var(--duration-theme)] hover-lift"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'var(--card-border)',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full aspect-[4/5] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
            style={{
              background: 'linear-gradient(145deg, transparent 40%, color-mix(in srgb, var(--accent) 25%, transparent) 100%)',
            }}
            aria-hidden
          />
        </div>
      </div>
      <div className="lg:col-span-8 flex flex-col justify-center">
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
          {name}
        </h3>
        <div className="mt-5 space-y-4 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function AboutTeamSection() {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      aria-labelledby="about-team-heading"
      className={`section-padding relative transition-all ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'
      }`}
      style={{
        backgroundColor: 'var(--bg)',
        transitionDuration: '400ms',
        transitionTimingFunction: 'var(--ease-smooth)',
        backgroundImage:
          'radial-gradient(ellipse 120% 80% at 50% 0%, color-mix(in srgb, var(--accent) 8%, transparent), transparent)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px max-w-5xl mx-auto"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--border-strong), transparent)',
        }}
        aria-hidden
      />
      <Container narrow>
        <header className="max-w-2xl mb-14 sm:mb-20">
          <h2
            id="about-team-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            {t('aboutTeamHeading')}
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('aboutTeamSubtitle')}
          </p>
        </header>

        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          <TeamProfile name={t('bioPabloName')} imageSrc={PABLO_IMG} imageAlt={t('bioPabloAlt')}>
            <p>{t('bioPabloP1')}</p>
            <p>{t('bioPabloP2')}</p>
          </TeamProfile>

          <div
            className="h-px w-full max-w-3xl mx-auto opacity-60"
            style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }}
            role="separator"
            aria-hidden
          />

          <TeamProfile name={t('bioAndreName')} imageSrc={ANDRE_IMG} imageAlt={t('bioAndreAlt')}>
            <p>{t('bioAndreP1')}</p>
          </TeamProfile>
        </div>
      </Container>
    </section>
  )
}
