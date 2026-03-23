import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

export function GameCatalog() {
  const { ref, visible } = useVisible()
  const { locale } = useLocale()

  const copy = {
    en: {
      title: 'Curated game catalog',
      subtitle:
        'A focused product lineup built for supportive insight through interactive gameplay.',
      insights: 'Insights',
      lowriderTitle: 'Lowrider',
      lowriderStatus: 'Featured',
      lowriderDesc:
        'A Stroop-inspired game designed to explore how individuals respond to distraction, conflict, and changing task demands.',
      lowriderSupport:
        'Can highlight behavioral tendencies in how a person handles distraction, conflict, and task demands.',
      lowriderCta: 'View Lowrider',
      lowriderTags: [
        'Proactive Control',
        'Reactive Control',
        'Conflict Handling',
        'Attention Under Pressure',
        'Response Tendencies',
        'Task Demands',
        'Speed vs Accuracy',
        'Support Preferences',
      ],
      bananasTitle: 'Go Bananas',
      bananasStatus: 'Coming Soon',
      bananasDesc:
        'A playful upcoming experience designed to explore attention, response style, and adaptive interaction through fast, engaging gameplay.',
      bananasCta: 'Stay Tuned',
      bananasTags: [
        'Attention',
        'Response Style',
        'Adaptability',
        'Engagement Patterns',
        'Processing Pace',
        'Focus Shifts',
        'Guided Interaction',
        'Cognitive Flexibility',
      ],
    },
    es: {
      title: 'Catálogo de juegos curado',
      subtitle:
        'Una selección enfocada de productos para obtener insight de apoyo a través del juego interactivo.',
      insights: 'Insights',
      lowriderTitle: 'Lowrider',
      lowriderStatus: 'Destacado',
      lowriderDesc:
        'Un juego inspirado en Stroop diseñado para explorar cómo las personas responden a la distracción, el conflicto y los cambios en la demanda de tareas.',
      lowriderSupport:
        'Puede resaltar tendencias conductuales sobre cómo una persona maneja distracción, conflicto y demandas de tarea.',
      lowriderCta: 'Ver Lowrider',
      lowriderTags: [
        'Control Proactivo',
        'Control Reactivo',
        'Manejo de Conflicto',
        'Atención bajo Presión',
        'Tendencias de Respuesta',
        'Demandas de Tarea',
        'Velocidad vs Precisión',
        'Preferencias de Apoyo',
      ],
      bananasTitle: 'Go Bananas',
      bananasStatus: 'Próximamente',
      bananasDesc:
        'Una próxima experiencia lúdica diseñada para explorar atención, estilo de respuesta e interacción adaptativa mediante un juego ágil y atractivo.',
      bananasCta: 'Próximamente',
      bananasTags: [
        'Atención',
        'Estilo de Respuesta',
        'Adaptabilidad',
        'Patrones de Engagement',
        'Ritmo de Procesamiento',
        'Cambios de Foco',
        'Interacción Guiada',
        'Flexibilidad Cognitiva',
      ],
    },
    de: {
      title: 'Kuratierter Spielekatalog',
      subtitle:
        'Eine fokussierte Produktauswahl für unterstützende Insights durch interaktives Gameplay.',
      insights: 'Insights',
      lowriderTitle: 'Lowrider',
      lowriderStatus: 'Featured',
      lowriderDesc:
        'Ein Stroop-inspiriertes Spiel, das untersucht, wie Menschen auf Ablenkung, Konflikt und wechselnde Aufgabenanforderungen reagieren.',
      lowriderSupport:
        'Kann Verhaltenstendenzen aufzeigen, wie eine Person mit Ablenkung, Konflikt und Aufgabenanforderungen umgeht.',
      lowriderCta: 'Lowrider ansehen',
      lowriderTags: [
        'Proaktive Kontrolle',
        'Reaktive Kontrolle',
        'Konfliktverarbeitung',
        'Aufmerksamkeit unter Druck',
        'Reaktionstendenzen',
        'Aufgabenanforderungen',
        'Tempo vs Genauigkeit',
        'Support-Präferenzen',
      ],
      bananasTitle: 'Go Bananas',
      bananasStatus: 'Demnächst',
      bananasDesc:
        'Ein kommendes, spielerisches Erlebnis zur Untersuchung von Aufmerksamkeit, Reaktionsstil und adaptiver Interaktion durch schnelles, fesselndes Gameplay.',
      bananasCta: 'Demnächst',
      bananasTags: [
        'Aufmerksamkeit',
        'Reaktionsstil',
        'Anpassungsfähigkeit',
        'Engagement-Muster',
        'Verarbeitungstempo',
        'Fokuswechsel',
        'Geführte Interaktion',
        'Kognitive Flexibilität',
      ],
    },
  }[locale]

  return (
    <section
      id="catalog"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg-elevated)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container>
        <SectionHeading title={copy.title} subtitle={copy.subtitle} />
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <Card hover padding="none" className="lg:col-span-2 overflow-hidden">
            <img
              src="/extras/lowrider.jpeg"
              alt="Lowrider game visual"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="inline-flex rounded-full px-3 py-1 text-xs font-medium mb-3" style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}>
                {copy.lowriderStatus}
              </div>
              <h3 className="font-display text-2xl font-semibold" style={{ color: 'var(--text)' }}>{copy.lowriderTitle}</h3>
              <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>{copy.lowriderDesc}</p>
              <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{copy.lowriderSupport}</p>
              <p className="mt-5 text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--muted)' }}>
                {copy.insights}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" role="list">
                {copy.lowriderTags.map((tag) => (
                  <li key={tag} className="rounded-full px-3 py-1.5 text-xs border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', backgroundColor: 'var(--panel-hover)' }}>
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                to="/games/lowrider"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {copy.lowriderCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>

          <Card hover padding="none" className="overflow-hidden">
            <img
              src="/extras/go-bananas-placeholder.svg"
              alt="Go Bananas placeholder visual"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="p-6">
              <div className="inline-flex rounded-full px-3 py-1 text-xs font-medium mb-3" style={{ backgroundColor: 'var(--panel-hover)', color: 'var(--text-secondary)' }}>
                {copy.bananasStatus}
              </div>
              <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{copy.bananasTitle}</h3>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{copy.bananasDesc}</p>
              <p className="mt-4 text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--muted)' }}>
                {copy.insights}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" role="list">
                {copy.bananasTags.map((tag) => (
                  <li key={tag} className="rounded-full px-3 py-1.5 text-xs border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', backgroundColor: 'var(--panel-hover)' }}>
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-block text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                {copy.bananasCta}
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
