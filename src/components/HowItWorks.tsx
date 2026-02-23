import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Package, Truck, RefreshCw, Shield } from 'lucide-react'

const STEPS = [
  { step: 1, titleKey: 'step1Title', descKey: 'step1Desc', icon: Package },
  { step: 2, titleKey: 'step2Title', descKey: 'step2Desc', icon: Truck },
  { step: 3, titleKey: 'step3Title', descKey: 'step3Desc', icon: RefreshCw },
  { step: 4, titleKey: 'step4Title', descKey: 'step4Desc', icon: Shield },
] as const

export function HowItWorks() {
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container narrow>
        <SectionHeading
          title={t('howTitle')}
          subtitle={t('howSubtitle')}
        />
        <ol className="mt-12 space-y-10 sm:space-y-12" role="list">
          {STEPS.map((item, i) => (
            <li key={item.step} className="relative flex gap-6 sm:gap-8">
              <div
                className="flex shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
              >
                <item.icon className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text)' }}>
                  {t(item.titleKey)}
                </h3>
                <p className="mt-2" style={{ color: 'var(--text-soft)' }}>{t(item.descKey)}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="absolute left-5 top-12 w-0.5 h-[calc(100%+2rem)] -bottom-10 hidden sm:block"
                  style={{ backgroundColor: 'var(--border)' }}
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
