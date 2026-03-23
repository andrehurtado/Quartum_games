import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { ProblemSolution } from '@/components/ProblemSolution'
import { HardwareTiers } from '@/components/HardwareTiers'
import { GameCatalog } from '@/components/GameCatalog'
import { HowItWorks } from '@/components/HowItWorks'
import { WhoItsFor } from '@/components/WhoItsFor'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'

export function AboutPage() {
  const { locale } = useLocale()
  const text = {
    en: {
      title: 'About Us',
      subtitle:
        'Quartum Games designs premium interactive systems and curated game experiences that deliver practical, insight-driven support for real-world environments.',
    },
    es: {
      title: 'Sobre nosotros',
      subtitle:
        'Quartum Games diseña sistemas interactivos premium y experiencias de juego curadas que ofrecen soporte práctico basado en insights para entornos reales.',
    },
    de: {
      title: 'Über uns',
      subtitle:
        'Quartum Games entwickelt Premium-Interaktionssysteme und kuratierte Spielerlebnisse, die praxisnahe, insight-basierte Unterstützung für reale Umgebungen bieten.',
    },
  }[locale]

  return (
    <>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <Container narrow>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            {text.title}
          </h1>
          <p className="mt-5 text-lg" style={{ color: 'var(--text-secondary)' }}>
            {text.subtitle}
          </p>
        </Container>
      </section>
      <ProblemSolution />
      <HardwareTiers />
      <GameCatalog />
      <HowItWorks />
      <WhoItsFor />
      <Testimonials />
      <FAQ />
    </>
  )
}
