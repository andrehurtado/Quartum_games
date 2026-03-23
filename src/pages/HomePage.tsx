import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { HomeHowItWorks } from '@/components/HomeHowItWorks'
import { FinalCTA } from '@/components/FinalCTA'

export function HomePage() {
  const { locale } = useLocale()

  const copy = {
    en: {
      title: 'Games that turn play into meaningful insight',
      subtitle:
        'We design interactive experiences that can highlight behavioral tendencies in how a person handles distraction, conflict, and task demands.',
      ctaPrimary: 'Explore Games',
      ctaSecondary: 'Learn More',
      what: 'What We Do',
      what1: 'Play-based interaction',
      what1d: 'Interactive gameplay designed for natural responses.',
      what2: 'Behavioral pattern observation',
      what2d: 'Observe tendencies across focus, pace, and conflict handling.',
      what3: 'Insight for support and learning',
      what3d: 'Translate interaction style into practical support.',
      flow: 'How It Works',
      flow1: 'Play',
      flow2: 'Patterns',
      flow3: 'Insights',
      flow4: 'Better Support',
      featured: 'Featured Game',
      featuredTitle: 'Lowrider',
      featuredDesc:
        'A Stroop-inspired experience built to explore response tendencies under distraction and conflicting stimuli.',
      viewLowrider: 'View Lowrider',
      disclaimer:
        'Our games provide supportive insights into interaction and learning patterns and are not clinical diagnostic tools.',
    },
    es: {
      title: 'Juegos que convierten el juego en insight significativo',
      subtitle:
        'Diseñamos experiencias interactivas que pueden resaltar tendencias conductuales en cómo una persona gestiona la distracción, el conflicto y las demandas de la tarea.',
      ctaPrimary: 'Explorar juegos',
      ctaSecondary: 'Saber más',
      what: 'Qué hacemos',
      what1: 'Interacción basada en juego',
      what1d: 'Juego interactivo diseñado para respuestas naturales.',
      what2: 'Observación de patrones conductuales',
      what2d: 'Observa tendencias en foco, ritmo y manejo del conflicto.',
      what3: 'Insight para apoyo y aprendizaje',
      what3d: 'Convierte el estilo de interacción en apoyo práctico.',
      flow: 'Cómo funciona',
      flow1: 'Juego',
      flow2: 'Patrones',
      flow3: 'Insights',
      flow4: 'Mejor apoyo',
      featured: 'Juego destacado',
      featuredTitle: 'Lowrider',
      featuredDesc:
        'Una experiencia inspirada en Stroop para explorar tendencias de respuesta ante distracción y estímulos en conflicto.',
      viewLowrider: 'Ver Lowrider',
      disclaimer:
        'Nuestros juegos ofrecen insights de apoyo sobre patrones de interacción y aprendizaje, y no son herramientas diagnósticas clínicas.',
    },
    de: {
      title: 'Spiele, die Spiel in aussagekräftige Insights verwandeln',
      subtitle:
        'Wir entwickeln interaktive Erlebnisse, die Verhaltenstendenzen sichtbar machen können – etwa beim Umgang mit Ablenkung, Konflikt und Aufgabenanforderungen.',
      ctaPrimary: 'Spiele entdecken',
      ctaSecondary: 'Mehr erfahren',
      what: 'Was wir tun',
      what1: 'Spielbasierte Interaktion',
      what1d: 'Interaktives Gameplay für natürliche Reaktionen.',
      what2: 'Beobachtung von Verhaltensmustern',
      what2d: 'Tendenzen bei Fokus, Tempo und Konfliktverarbeitung erkennen.',
      what3: 'Insight für Unterstützung und Lernen',
      what3d: 'Interaktionsstil in praktische Unterstützung übersetzen.',
      flow: 'So funktioniert es',
      flow1: 'Spiel',
      flow2: 'Muster',
      flow3: 'Insights',
      flow4: 'Bessere Unterstützung',
      featured: 'Featured Game',
      featuredTitle: 'Lowrider',
      featuredDesc:
        'Ein Stroop-inspiriertes Erlebnis, um Reaktionstendenzen bei Ablenkung und widersprüchlichen Reizen zu untersuchen.',
      viewLowrider: 'Lowrider ansehen',
      disclaimer:
        'Unsere Spiele liefern unterstützende Insights zu Interaktions- und Lernmustern und sind keine klinischen Diagnosewerkzeuge.',
    },
  }[locale]

  return (
    <>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]" style={{ color: 'var(--text)' }}>
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
              {copy.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/games/lowrider" className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium">
                {copy.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--panel-hover)]" style={{ borderColor: 'var(--border)' }}>
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--text)' }}>{copy.what}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <Card><h3 className="font-semibold" style={{ color: 'var(--text)' }}>{copy.what1}</h3><p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{copy.what1d}</p></Card>
            <Card><h3 className="font-semibold" style={{ color: 'var(--text)' }}>{copy.what2}</h3><p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{copy.what2d}</p></Card>
            <Card><h3 className="font-semibold" style={{ color: 'var(--text)' }}>{copy.what3}</h3><p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{copy.what3d}</p></Card>
          </div>
        </Container>
      </section>

      <HomeHowItWorks sectionTitle={copy.flow} stepTitles={[copy.flow1, copy.flow2, copy.flow3, copy.flow4]} />

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <Card>
            <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--accent)' }}>{copy.featured}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold" style={{ color: 'var(--text)' }}>{copy.featuredTitle}</h3>
            <p className="mt-3 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>{copy.featuredDesc}</p>
            <Link to="/games/lowrider" className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {copy.viewLowrider}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container narrow>
          <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>{copy.disclaimer}</p>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
