import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { HomeWhatWeDo } from '@/components/HomeWhatWeDo'
import { HomeHowItWorks } from '@/components/HomeHowItWorks'
import { SpanishLandingVideoSection } from '@/components/SpanishLandingVideoSection'
import { FinalCTA } from '@/components/FinalCTA'

/** Featured Lowrider mark — `public/extras/lowrider_logo.png` (case-sensitive on Linux). */
const LOWRIDER_LOGO_SRC = '/extras/lowrider_logo.png'

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
      whatSubtitle: 'Play, observe, and translate — three pillars that connect engagement to meaningful support.',
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
      featuredLogoAlt: 'Lowrider logo',
      disclaimer:
        'Our games provide supportive insights into interaction and learning patterns and are not clinical diagnostic tools.',
    },
    es: {
      title: 'Donde el juego se convierte en datos, aprendizaje y crecimiento',
      subtitle:
        'Diseñamos experiencias interactivas que pueden resaltar tendencias conductuales en cómo una persona gestiona la distracción, el conflicto y las demandas de la tarea.',
      ctaPrimary: 'Explorar juegos',
      ctaSecondary: 'Saber más',
      what: 'Qué hacemos',
      whatSubtitle: 'Jugar, observar y traducir — tres pilares que conectan el engagement con un apoyo significativo.',
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
      featuredLogoAlt: 'Logotipo de Lowrider',
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
      whatSubtitle: 'Spielen, beobachten, übersetzen — drei Säulen, die Engagement mit bedeutsamer Unterstützung verbinden.',
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
      featuredLogoAlt: 'Lowrider-Logo',
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

      {locale === 'es' ? <SpanishLandingVideoSection /> : null}

      <HomeWhatWeDo
        title={copy.what}
        subtitle={copy.whatSubtitle}
        cards={[
          { headline: copy.what1, description: copy.what1d, kind: 'play' },
          { headline: copy.what2, description: copy.what2d, kind: 'patterns' },
          { headline: copy.what3, description: copy.what3d, kind: 'insight' },
        ]}
      />

      <HomeHowItWorks sectionTitle={copy.flow} stepTitles={[copy.flow1, copy.flow2, copy.flow3, copy.flow4]} />

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <Card hover={false} padding="none" className="overflow-hidden">
            <div className="grid grid-cols-1 items-center gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
              <div className="order-1 min-w-0 text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
                  {copy.featured}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--text)' }}>
                  {copy.featuredTitle}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed lg:max-w-none" style={{ color: 'var(--text-secondary)' }}>
                  {copy.featuredDesc}
                </p>
                <Link
                  to="/games/lowrider"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)] rounded-md"
                  style={{ color: 'var(--accent)' }}
                >
                  {copy.viewLowrider}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
              <div className="order-2 flex justify-center lg:justify-end">
                <div
                  className="flex w-full max-w-[280px] items-center justify-center rounded-2xl border p-8 sm:p-10 lg:max-w-[320px]"
                  style={{
                    borderColor: 'var(--card-border)',
                    background:
                      'linear-gradient(160deg, var(--card-bg) 0%, color-mix(in srgb, var(--card-bg) 88%, var(--accent)) 100%)',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <img
                    src={LOWRIDER_LOGO_SRC}
                    alt={copy.featuredLogoAlt}
                    className="h-auto max-h-28 w-full max-w-[220px] object-contain object-center sm:max-h-32 lg:max-h-36"
                    width={220}
                    height={120}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
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
