import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const reactionDist = [
  { bin: '250', count: 2 },
  { bin: '300', count: 5 },
  { bin: '350', count: 11 },
  { bin: '400', count: 14 },
  { bin: '450', count: 10 },
  { bin: '500', count: 6 },
]

const speedAccuracy = [
  { speed: 280, accuracy: 70 },
  { speed: 320, accuracy: 78 },
  { speed: 360, accuracy: 83 },
  { speed: 410, accuracy: 89 },
  { speed: 460, accuracy: 92 },
]

const conflictCost = [
  { type: 'Congruent', rt: 340 },
  { type: 'Incongruent', rt: 430 },
]

const consistency = [
  { trial: 1, score: 82 },
  { trial: 2, score: 84 },
  { trial: 3, score: 79 },
  { trial: 4, score: 85 },
  { trial: 5, score: 83 },
  { trial: 6, score: 86 },
]

export function LowriderPage() {
  const { locale } = useLocale()
  const text = {
    en: {
      title: 'Lowrider',
      subtitle:
        'A Stroop-inspired game designed to explore how individuals respond to distraction, conflict, and changing task demands.',
      nonClinical:
        'Lowrider is not a clinical diagnostic tool and does not replace professional evaluation.',
      whatTitle: 'What It Is',
      whatBody:
        'Lowrider is inspired by the Stroop paradigm and focuses on response patterns under conflicting stimuli. It looks at attention, consistency, pace, and error behavior.',
      highlightTitle: 'What It Can Highlight',
      highlightLead:
        'Lowrider can highlight behavioral tendencies in how a person handles distraction, conflict, and task demands.',
      h1: 'response speed vs accuracy',
      h2: 'consistency across trials',
      h3: 'sensitivity to conflicting information',
      h4: 'adaptation to changing rules',
      actionTitle: 'Insight → Action',
      a1t: 'Prefers structured tasks',
      a1d: 'Provide instructions upfront.',
      a2t: 'Responds better to guidance',
      a2d: 'Break tasks into steps.',
      a3t: 'Sensitive to speed pressure',
      a3d: 'Reduce time constraints.',
      a4t: 'Consistent performance',
      a4d: 'Allow more autonomy.',
      metrics: 'Example Metrics (mock data)',
      m1: 'Reaction Time Distribution',
      m2: 'Accuracy vs Speed',
      m3: 'Conflict Cost',
      m4: 'Consistency Over Time',
      sampleTitle: 'Sample Insight Card',
      sample:
        'Pattern Summary: Reactive Response Tendency\nObservation: Faster responses with increased error under conflict\nSuggested Support: Provide step-by-step guidance and reduce simultaneous demands',
      disclaimerTitle: 'Important Clinical Disclaimer',
      d1: 'Lowrider is not diagnostic.',
      d2: 'It is not a medical tool.',
      d3: 'It does not detect conditions (e.g., dementia, ADHD, etc.).',
      d4: 'It should not replace professional evaluation.',
      d5: 'It is intended for supportive insight only.',
    },
    es: {
      title: 'Lowrider',
      subtitle:
        'Un juego inspirado en Stroop diseñado para explorar cómo las personas responden a la distracción, el conflicto y los cambios en la demanda de tareas.',
      nonClinical:
        'Lowrider no es una herramienta diagnóstica clínica y no sustituye una evaluación profesional.',
      whatTitle: 'Qué es',
      whatBody:
        'Lowrider está inspirado en el paradigma Stroop y se centra en patrones de respuesta ante estímulos en conflicto. Analiza atención, consistencia, ritmo y conducta de error.',
      highlightTitle: 'Qué puede resaltar',
      highlightLead:
        'Lowrider puede resaltar tendencias conductuales sobre cómo una persona maneja distracción, conflicto y demandas de tarea.',
      h1: 'velocidad de respuesta vs precisión',
      h2: 'consistencia entre ensayos',
      h3: 'sensibilidad a información conflictiva',
      h4: 'adaptación a reglas cambiantes',
      actionTitle: 'Insight → Acción',
      a1t: 'Prefiere tareas estructuradas',
      a1d: 'Proporcionar instrucciones por adelantado.',
      a2t: 'Responde mejor con guía',
      a2d: 'Dividir tareas en pasos.',
      a3t: 'Sensibilidad a la presión de velocidad',
      a3d: 'Reducir restricciones de tiempo.',
      a4t: 'Rendimiento consistente',
      a4d: 'Permitir más autonomía.',
      metrics: 'Métricas de ejemplo (datos simulados)',
      m1: 'Distribución del tiempo de reacción',
      m2: 'Precisión vs velocidad',
      m3: 'Coste de conflicto',
      m4: 'Consistencia en el tiempo',
      sampleTitle: 'Tarjeta de insight de ejemplo',
      sample:
        'Resumen de patrón: Tendencia de respuesta reactiva\nObservación: Respuestas más rápidas con más error bajo conflicto\nSoporte sugerido: Proporcionar guía paso a paso y reducir demandas simultáneas',
      disclaimerTitle: 'Aviso clínico importante',
      d1: 'Lowrider no es diagnóstico.',
      d2: 'No es una herramienta médica.',
      d3: 'No detecta condiciones (p. ej., demencia, TDAH, etc.).',
      d4: 'No debe sustituir una evaluación profesional.',
      d5: 'Está destinado solo a insights de apoyo.',
    },
    de: {
      title: 'Lowrider',
      subtitle:
        'Ein Stroop-inspiriertes Spiel, das untersucht, wie Menschen auf Ablenkung, Konflikt und wechselnde Aufgabenanforderungen reagieren.',
      nonClinical:
        'Lowrider ist kein klinisches Diagnosewerkzeug und ersetzt keine professionelle Beurteilung.',
      whatTitle: 'Was es ist',
      whatBody:
        'Lowrider ist vom Stroop-Paradigma inspiriert und fokussiert Reaktionsmuster bei widersprüchlichen Reizen. Betrachtet werden Aufmerksamkeit, Konsistenz, Tempo und Fehlerverhalten.',
      highlightTitle: 'Was es aufzeigen kann',
      highlightLead:
        'Lowrider kann Verhaltenstendenzen aufzeigen, wie eine Person mit Ablenkung, Konflikt und Aufgabenanforderungen umgeht.',
      h1: 'Reaktionsgeschwindigkeit vs. Genauigkeit',
      h2: 'Konsistenz über Durchläufe',
      h3: 'Sensitivität für widersprüchliche Informationen',
      h4: 'Anpassung an Regelwechsel',
      actionTitle: 'Insight → Handlung',
      a1t: 'Bevorzugt strukturierte Aufgaben',
      a1d: 'Anweisungen vorab bereitstellen.',
      a2t: 'Reagiert besser auf Anleitung',
      a2d: 'Aufgaben in Schritte aufteilen.',
      a3t: 'Sensibel bei Zeitdruck',
      a3d: 'Zeitvorgaben reduzieren.',
      a4t: 'Konstante Leistung',
      a4d: 'Mehr Autonomie ermöglichen.',
      metrics: 'Beispielmetriken (Mock-Daten)',
      m1: 'Reaktionszeitverteilung',
      m2: 'Genauigkeit vs. Geschwindigkeit',
      m3: 'Konfliktkosten',
      m4: 'Konsistenz über Zeit',
      sampleTitle: 'Beispiel-Insight-Karte',
      sample:
        'Musterzusammenfassung: Reaktive Reaktionstendenz\nBeobachtung: Schnellere Reaktionen mit höherer Fehlerquote bei Konflikt\nVorgeschlagene Unterstützung: Schritt-für-Schritt-Anleitung und weniger gleichzeitige Anforderungen',
      disclaimerTitle: 'Wichtiger klinischer Hinweis',
      d1: 'Lowrider ist nicht diagnostisch.',
      d2: 'Es ist kein medizinisches Werkzeug.',
      d3: 'Es erkennt keine Erkrankungen (z. B. Demenz, ADHS usw.).',
      d4: 'Es ersetzt keine professionelle Beurteilung.',
      d5: 'Es ist ausschließlich für unterstützende Insights gedacht.',
    },
  }[locale]

  return (
    <>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <h1 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text)' }}>{text.title}</h1>
          <p className="mt-4 max-w-3xl text-lg" style={{ color: 'var(--text-secondary)' }}>{text.subtitle}</p>
          <p className="mt-6 text-sm rounded-lg border px-4 py-3 w-fit" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', backgroundColor: 'var(--card-bg)' }}>
            {text.nonClinical}
          </p>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <SectionHeading title={text.whatTitle} subtitle={text.whatBody} />
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <SectionHeading title={text.highlightTitle} subtitle={text.highlightLead} />
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {[text.h1, text.h2, text.h3, text.h4].map((item) => (
              <li key={item} className="rounded-xl border px-4 py-3 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', backgroundColor: 'var(--card-bg)' }}>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <SectionHeading title={text.actionTitle} />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              [text.a1t, text.a1d],
              [text.a2t, text.a2d],
              [text.a3t, text.a3d],
              [text.a4t, text.a4d],
            ].map(([t, d]) => (
              <Card key={t}>
                <p className="font-semibold" style={{ color: 'var(--text)' }}>{t}</p>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <SectionHeading title={text.metrics} />
          <div className="mt-8 grid lg:grid-cols-2 gap-5">
            <Card>
              <p className="mb-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.m1}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={reactionDist}>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                    <XAxis dataKey="bin" stroke="var(--text-secondary)" />
                    <YAxis stroke="var(--text-secondary)" />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="var(--accent)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <p className="mb-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.m2}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                    <CartesianGrid stroke="var(--border)" />
                    <XAxis type="number" dataKey="speed" name="Speed" stroke="var(--text-secondary)" />
                    <YAxis type="number" dataKey="accuracy" name="Accuracy" stroke="var(--text-secondary)" />
                    <Tooltip />
                    <Scatter data={speedAccuracy} fill="var(--accent)" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <p className="mb-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.m3}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conflictCost}>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                    <XAxis dataKey="type" stroke="var(--text-secondary)" />
                    <YAxis stroke="var(--text-secondary)" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rt" fill="var(--accent)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <p className="mb-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.m4}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={consistency}>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                    <XAxis dataKey="trial" stroke="var(--text-secondary)" />
                    <YAxis stroke="var(--text-secondary)" />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="var(--accent)" strokeWidth={2} dot />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container narrow>
          <Card>
            <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{text.sampleTitle}</h3>
            <p className="mt-4 whitespace-pre-line text-sm" style={{ color: 'var(--text-secondary)' }}>{text.sample}</p>
          </Card>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container narrow>
          <Card>
            <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{text.disclaimerTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {[text.d1, text.d2, text.d3, text.d4, text.d5].map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>
    </>
  )
}
