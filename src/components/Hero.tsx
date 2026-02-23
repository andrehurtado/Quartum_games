import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'

export function Hero() {
  const { t } = useLocale()

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <Container>
        <div className="section-padding pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-36">
          <div className="max-w-4xl">
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              style={{ color: 'var(--text)' }}
            >
              {t('tagline')}
            </h1>
            <p
              className="mt-8 text-xl sm:text-2xl max-w-2xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('subline')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
