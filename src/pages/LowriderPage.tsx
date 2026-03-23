import {
  Bar,
  BarChart,
  CartesianGrid,
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
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const reactionByType = [
  { round: 'R1', congruent: 335, incongruent: 428 },
  { round: 'R2', congruent: 326, incongruent: 421 },
  { round: 'R3', congruent: 338, incongruent: 439 },
  { round: 'R4', congruent: 331, incongruent: 432 },
]

const speedAccuracy = [
  { speed: 300, accuracy: 89 },
  { speed: 340, accuracy: 87 },
  { speed: 370, accuracy: 84 },
  { speed: 410, accuracy: 79 },
  { speed: 450, accuracy: 74 },
]

const conflictCost = [
  { type: 'Congruent', value: 332 },
  { type: 'Incongruent', value: 430 },
]

const consistency = [
  { round: 1, stability: 82 },
  { round: 2, stability: 84 },
  { round: 3, stability: 79 },
  { round: 4, stability: 86 },
  { round: 5, stability: 83 },
  { round: 6, stability: 85 },
]

export function LowriderPage() {
  const { locale } = useLocale()
  const text = {
    en: {
      title: 'Lowrider',
      subtitle:
        'A Stroop-inspired game designed to explore how individuals respond to distraction, conflict, and changing task demands.',
      ctaInsights: 'See Insights',
      ctaHow: 'How It Works',
      nonClinical:
        'Lowrider is not a clinical diagnostic tool and does not replace professional evaluation.',
      stroopTitle: 'What is the Stroop task?',
      stroopBody:
        'The Stroop task explores how people respond when automatic and task-relevant signals conflict. A familiar example is when a color word and the visible ink color do not match. The task is to respond to the relevant signal while ignoring interference.',
      stroopWord: 'WORD',
      stroopColor: 'COLOR',
      stroopConflict: 'CONFLICT',
      stroopResponse: 'RESPONSE',
      controlTitle: 'Proactive vs Reactive control',
      proactiveTitle: 'Proactive control',
      proactiveBody:
        'Preparing in advance, maintaining the task goal before conflict appears, and favoring structure and anticipation.',
      proactiveReal: 'Real-world interpretation: stronger performance when expectations are clear upfront.',
      reactiveTitle: 'Reactive control',
      reactiveBody:
        'Responding once conflict appears, adjusting after interference is detected, and relying on in-the-moment correction.',
      reactiveReal: 'Real-world interpretation: stronger performance with stepwise guidance during the task.',
      controlBridge:
        'Understanding whether a person leans more toward anticipatory structure or in-the-moment correction can help inform how tasks, instructions, and support are delivered.',
      supportTitle: 'Why this matters for patient support',
      supportCard1: 'Structured Preparation Preference',
      supportCard1a: 'What this pattern may suggest: clearer outcomes when expectations are set before starting.',
      supportCard1b: 'How this may help guide support: provide instructions upfront and define priorities.',
      supportCard2: 'In-the-Moment Guidance Preference',
      supportCard2a: 'What this pattern may suggest: better outcomes with cues during active task flow.',
      supportCard2b: 'How this may help guide support: offer step-by-step prompts during transitions.',
      supportCard3: 'Speed-Sensitive Response Style',
      supportCard3a: 'What this pattern may suggest: accuracy may decrease under time pressure.',
      supportCard3b: 'How this may help guide support: reduce pressure and pace demands when possible.',
      supportCard4: 'Consistent Task Engagement',
      supportCard4a: 'What this pattern may suggest: steady performance in predictable contexts.',
      supportCard4b: 'How this may help guide support: allow more autonomy with clear boundaries.',
      highlightTitle: 'How Lowrider can provide useful insight',
      highlightLead:
        'Lowrider can highlight behavioral tendencies in how a person handles distraction, conflict, and task demands.',
      h1: 'pace vs accuracy tendencies',
      h2: 'consistency across repeated trials',
      h3: 'response under conflicting stimuli',
      h4: 'adaptation when demands change',
      h5: 'preparation-first vs guided-adjustment preference',
      metrics: 'Example Metrics (mock data)',
      m1: 'Reaction Time by Trial Type',
      m2: 'Accuracy vs Speed',
      m3: 'Conflict Cost',
      m4: 'Consistency Over Time',
      m1i: 'A larger congruent/incongruent gap can highlight sensitivity to interference under competing signals.',
      m2i: 'A stronger speed-accuracy tradeoff may suggest pressure-sensitive response tendencies.',
      m3i: 'Higher conflict cost may suggest greater effort needed when filtering competing cues.',
      m4i: 'Trend stability can inform whether support should be consistent or adjusted over time.',
      dashboardTitle: 'Sample Insight Dashboard',
      sampleTitle: 'Sample Insight Card',
      sample:
        'Pattern Summary: Greater variability under conflict\nResponse Style: More reactive than anticipatory\nInstruction Preference: Stepwise guidance may be helpful\nSuggested Support Approach: Reduce simultaneous demands and provide cues during task flow',
      dashboard1: 'Pattern Summary',
      dashboard1v: 'Greater variability under conflict',
      dashboard2: 'Response Style',
      dashboard2v: 'More reactive than anticipatory',
      dashboard3: 'Instruction Preference',
      dashboard3v: 'Stepwise guidance may be helpful',
      dashboard4: 'Suggested Support Approach',
      dashboard4v: 'Reduce simultaneous demands and provide cues during task flow',
      disclaimerTitle: 'Important Note',
      d1: 'Lowrider does not diagnose medical, neurological, psychological, or developmental conditions.',
      d2: 'It should not replace formal clinical assessment.',
      d3: 'It is intended to provide supportive insight into response patterns and task engagement.',
      d4: 'Where there are health-related concerns, qualified professionals remain essential.',
      finalTitle: 'Designed to support understanding, not replace evaluation',
      finalExplore: 'Explore More Games',
      finalContact: 'Contact Us',
      finalLearn: 'Learn About Quartum',
    },
    es: {
      title: 'Lowrider',
      subtitle:
        'Un juego inspirado en Stroop diseñado para explorar cómo las personas responden a la distracción, el conflicto y los cambios en la demanda de tareas.',
      ctaInsights: 'Ver insights',
      ctaHow: 'Cómo funciona',
      nonClinical:
        'Lowrider no es una herramienta diagnóstica clínica y no sustituye una evaluación profesional.',
      stroopTitle: '¿Qué es la tarea Stroop?',
      stroopBody:
        'La tarea Stroop explora cómo respondemos cuando señales automáticas y señales relevantes entran en conflicto. Un ejemplo típico es cuando una palabra de color y el color de tinta visible no coinciden. La tarea consiste en responder a la señal relevante ignorando la interferencia.',
      stroopWord: 'PALABRA',
      stroopColor: 'COLOR',
      stroopConflict: 'CONFLICTO',
      stroopResponse: 'RESPUESTA',
      controlTitle: 'Control proactivo vs reactivo',
      proactiveTitle: 'Control proactivo',
      proactiveBody:
        'Preparación previa, mantenimiento del objetivo antes de que aparezca el conflicto y preferencia por estructura y anticipación.',
      proactiveReal: 'Interpretación práctica: mejor rendimiento con expectativas claras desde el inicio.',
      reactiveTitle: 'Control reactivo',
      reactiveBody:
        'Respuesta cuando aparece el conflicto, ajuste tras detectar interferencia y mayor corrección en tiempo real.',
      reactiveReal: 'Interpretación práctica: mejor rendimiento con guía por pasos durante la tarea.',
      controlBridge:
        'Comprender si una persona se inclina más por la estructura anticipatoria o por la corrección en tiempo real puede ayudar a definir cómo se entregan tareas, instrucciones y apoyo.',
      supportTitle: 'Por qué esto importa para el apoyo al paciente',
      supportCard1: 'Preferencia por preparación estructurada',
      supportCard1a: 'Lo que este patrón puede sugerir: mejores resultados cuando se define la estructura antes de empezar.',
      supportCard1b: 'Cómo puede guiar el apoyo: dar instrucciones claras por adelantado y prioridades.',
      supportCard2: 'Preferencia por guía en el momento',
      supportCard2a: 'Lo que este patrón puede sugerir: mejor desempeño con señales durante el flujo de la tarea.',
      supportCard2b: 'Cómo puede guiar el apoyo: ofrecer ayudas paso a paso en transiciones.',
      supportCard3: 'Estilo sensible a la presión de velocidad',
      supportCard3a: 'Lo que este patrón puede sugerir: la precisión puede bajar bajo presión temporal.',
      supportCard3b: 'Cómo puede guiar el apoyo: reducir presión y restricciones de tiempo cuando sea posible.',
      supportCard4: 'Compromiso de tarea consistente',
      supportCard4a: 'Lo que este patrón puede sugerir: rendimiento más estable en contextos previsibles.',
      supportCard4b: 'Cómo puede guiar el apoyo: permitir más autonomía con límites claros.',
      highlightTitle: 'Cómo Lowrider puede aportar insights útiles',
      highlightLead:
        'Lowrider puede resaltar tendencias conductuales sobre cómo una persona maneja distracción, conflicto y demandas de tarea.',
      h1: 'tendencias de ritmo vs precisión',
      h2: 'consistencia en ensayos repetidos',
      h3: 'respuesta ante estímulos en conflicto',
      h4: 'adaptación cuando cambian las demandas',
      h5: 'preferencia por preparación vs ajuste guiado',
      metrics: 'Métricas de ejemplo (datos simulados)',
      m1: 'Tiempo de reacción por tipo de ensayo',
      m2: 'Precisión vs velocidad',
      m3: 'Coste de conflicto',
      m4: 'Consistencia en el tiempo',
      m1i: 'Una mayor separación entre congruente e incongruente puede resaltar sensibilidad a la interferencia.',
      m2i: 'Un tradeoff más fuerte entre velocidad y precisión puede sugerir respuesta sensible a la presión.',
      m3i: 'Un coste de conflicto elevado puede sugerir mayor esfuerzo al filtrar señales competidoras.',
      m4i: 'La estabilidad de la tendencia puede orientar si el apoyo debe ser constante o ajustarse en el tiempo.',
      dashboardTitle: 'Panel de insight de ejemplo',
      sampleTitle: 'Tarjeta de insight de ejemplo',
      sample:
        'Resumen de patrón: Mayor variabilidad bajo conflicto\nEstilo de respuesta: Más reactivo que anticipatorio\nPreferencia de instrucción: Puede ayudar una guía por pasos\nSoporte sugerido: Reducir demandas simultáneas y aportar señales durante el flujo',
      dashboard1: 'Resumen de patrón',
      dashboard1v: 'Mayor variabilidad bajo conflicto',
      dashboard2: 'Estilo de respuesta',
      dashboard2v: 'Más reactivo que anticipatorio',
      dashboard3: 'Preferencia de instrucción',
      dashboard3v: 'Puede ayudar una guía por pasos',
      dashboard4: 'Enfoque de soporte sugerido',
      dashboard4v: 'Reducir demandas simultáneas y aportar señales durante el flujo',
      disclaimerTitle: 'Nota importante',
      d1: 'Lowrider no diagnostica condiciones médicas, neurológicas, psicológicas o del desarrollo.',
      d2: 'No debe sustituir una evaluación clínica formal.',
      d3: 'Su objetivo es aportar insight de apoyo sobre patrones de respuesta y compromiso con la tarea.',
      d4: 'Ante inquietudes de salud, los profesionales cualificados siguen siendo esenciales.',
      finalTitle: 'Diseñado para apoyar la comprensión, no para reemplazar la evaluación',
      finalExplore: 'Explorar más juegos',
      finalContact: 'Contactar',
      finalLearn: 'Conocer Quartum',
    },
    de: {
      title: 'Lowrider',
      subtitle:
        'Ein Stroop-inspiriertes Spiel, das untersucht, wie Menschen auf Ablenkung, Konflikt und wechselnde Aufgabenanforderungen reagieren.',
      ctaInsights: 'Insights ansehen',
      ctaHow: 'So funktioniert es',
      nonClinical:
        'Lowrider ist kein klinisches Diagnosewerkzeug und ersetzt keine professionelle Beurteilung.',
      stroopTitle: 'Was ist die Stroop-Aufgabe?',
      stroopBody:
        'Die Stroop-Aufgabe misst, wie Menschen reagieren, wenn automatische und aufgabenrelevante Signale in Konflikt stehen. Ein typisches Beispiel ist, wenn ein Farbwörtchen und die sichtbare Schriftfarbe nicht übereinstimmen. Die Aufgabe ist, auf das relevante Signal zu reagieren und Störreize zu ignorieren.',
      stroopWord: 'WORT',
      stroopColor: 'FARBE',
      stroopConflict: 'KONFLIKT',
      stroopResponse: 'REAKTION',
      controlTitle: 'Proaktive vs reaktive Kontrolle',
      proactiveTitle: 'Proaktive Kontrolle',
      proactiveBody:
        'Vorbereitung im Voraus, Aufrechterhaltung des Ziels vor dem Konflikt sowie Fokus auf Struktur und Antizipation.',
      proactiveReal: 'Praxisbezug: häufig bessere Leistung bei klaren Erwartungen vorab.',
      reactiveTitle: 'Reaktive Kontrolle',
      reactiveBody:
        'Reaktion, sobald Konflikt auftritt, Anpassung nach erkannter Interferenz und stärkere Korrektur im Moment.',
      reactiveReal: 'Praxisbezug: häufig bessere Leistung mit schrittweiser Anleitung während der Aufgabe.',
      controlBridge:
        'Zu verstehen, ob jemand eher zu antizipierender Struktur oder zu Korrektur im Moment neigt, kann helfen, Aufgaben, Instruktionen und Unterstützung besser zu gestalten.',
      supportTitle: 'Warum das für die Patientenunterstützung wichtig ist',
      supportCard1: 'Präferenz für strukturierte Vorbereitung',
      supportCard1a: 'Was dieses Muster nahelegen kann: bessere Ergebnisse mit klaren Erwartungen vor Beginn.',
      supportCard1b: 'Wie das Unterstützung leiten kann: Anweisungen und Prioritäten vorab bereitstellen.',
      supportCard2: 'Präferenz für Anleitung im Moment',
      supportCard2a: 'Was dieses Muster nahelegen kann: bessere Leistung mit Hinweisen während des Ablaufs.',
      supportCard2b: 'Wie das Unterstützung leiten kann: Schritt-für-Schritt-Cues in Übergängen einsetzen.',
      supportCard3: 'Zeitdruck-sensitiver Reaktionsstil',
      supportCard3a: 'Was dieses Muster nahelegen kann: Genauigkeit kann unter Zeitdruck sinken.',
      supportCard3b: 'Wie das Unterstützung leiten kann: Zeitdruck und Tempovorgaben reduzieren.',
      supportCard4: 'Konstantes Aufgabenengagement',
      supportCard4a: 'Was dieses Muster nahelegen kann: stabilere Leistung in vorhersehbaren Umgebungen.',
      supportCard4b: 'Wie das Unterstützung leiten kann: mehr Autonomie bei klaren Leitplanken ermöglichen.',
      highlightTitle: 'Wie Lowrider nützliche Insights liefern kann',
      highlightLead:
        'Lowrider kann Verhaltenstendenzen aufzeigen, wie eine Person mit Ablenkung, Konflikt und Aufgabenanforderungen umgeht.',
      h1: 'Tempo-vs-Genauigkeits-Tendenzen',
      h2: 'Konsistenz über wiederholte Durchläufe',
      h3: 'Reaktion bei widersprüchlichen Reizen',
      h4: 'Anpassung bei wechselnden Anforderungen',
      h5: 'Präferenz für Vorbereitung vs angeleitete Anpassung',
      metrics: 'Beispielmetriken (Mock-Daten)',
      m1: 'Reaktionszeit nach Versuchstyp',
      m2: 'Genauigkeit vs. Geschwindigkeit',
      m3: 'Konfliktkosten',
      m4: 'Konsistenz über Zeit',
      m1i: 'Eine größere Differenz zwischen kongruent und inkongruent kann Interferenzsensitivität aufzeigen.',
      m2i: 'Ein stärkerer Trade-off zwischen Tempo und Genauigkeit kann drucksensitive Reaktionstendenzen nahelegen.',
      m3i: 'Höhere Konfliktkosten können auf mehr Aufwand beim Filtern konkurrierender Hinweise hindeuten.',
      m4i: 'Trendstabilität kann informieren, ob Unterstützung konstant oder adaptiv erfolgen sollte.',
      dashboardTitle: 'Beispiel-Insight-Dashboard',
      sampleTitle: 'Beispiel-Insight-Karte',
      sample:
        'Musterzusammenfassung: Größere Variabilität bei Konflikt\nReaktionsstil: Eher reaktiv als antizipierend\nInstruktionspräferenz: Schrittweise Anleitung kann hilfreich sein\nEmpfohlener Supportansatz: Gleichzeitige Anforderungen reduzieren und Hinweise im Aufgabenfluss geben',
      dashboard1: 'Musterzusammenfassung',
      dashboard1v: 'Größere Variabilität bei Konflikt',
      dashboard2: 'Reaktionsstil',
      dashboard2v: 'Eher reaktiv als antizipierend',
      dashboard3: 'Instruktionspräferenz',
      dashboard3v: 'Schrittweise Anleitung kann hilfreich sein',
      dashboard4: 'Empfohlener Supportansatz',
      dashboard4v: 'Gleichzeitige Anforderungen reduzieren und Hinweise im Aufgabenfluss geben',
      disclaimerTitle: 'Wichtiger Hinweis',
      d1: 'Lowrider diagnostiziert keine medizinischen, neurologischen, psychologischen oder entwicklungsbezogenen Bedingungen.',
      d2: 'Es sollte keine formale klinische Beurteilung ersetzen.',
      d3: 'Es dient dazu, unterstützende Insights zu Reaktionsmustern und Aufgabenengagement zu liefern.',
      d4: 'Bei gesundheitsbezogenen Anliegen bleiben qualifizierte Fachpersonen essenziell.',
      finalTitle: 'Entwickelt, um Verständnis zu unterstützen – nicht um Evaluation zu ersetzen',
      finalExplore: 'Mehr Spiele entdecken',
      finalContact: 'Kontakt',
      finalLearn: 'Mehr über Quartum',
    },
  }[locale]

  return (
    <>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <div className="grid lg:grid-cols-[1.05fr,1fr] gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: 'var(--text)' }}>
                {text.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg" style={{ color: 'var(--text-secondary)' }}>
                {text.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#insights" className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium">
                  {text.ctaInsights}
                </a>
                <a
                  href="#how-it-works-lowrider"
                  className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--panel-hover)]"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {text.ctaHow}
                </a>
              </div>
              <p
                className="mt-6 text-sm rounded-lg border px-4 py-3 w-fit"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', backgroundColor: 'var(--card-bg)' }}
              >
                {text.nonClinical}
              </p>
            </div>
            <Card padding="none" className="overflow-hidden">
              <div className="relative">
                <img
                  src="/extras/lowrider.jpeg"
                  alt="Lowrider game preview"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/45 to-transparent"
                >
                  <p className="text-sm font-medium text-white/90">Lowrider</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <SectionHeading title={text.stroopTitle} subtitle={text.stroopBody} />
            <Card>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['stroopWord', 'RED'],
                  ['stroopColor', 'BLUE'],
                  ['stroopConflict', 'Mismatch'],
                  ['stroopResponse', 'Say ink color'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border px-4 py-3" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card-bg)' }}>
                    <p className="text-[11px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>{text[k as keyof typeof text]}</p>
                    <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text)' }}>{v}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section id="how-it-works-lowrider" className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <SectionHeading title={text.controlTitle} />
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <Card>
              <p className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{text.proactiveTitle}</p>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{text.proactiveBody}</p>
              <p className="mt-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.proactiveReal}</p>
            </Card>
            <Card>
              <p className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{text.reactiveTitle}</p>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{text.reactiveBody}</p>
              <p className="mt-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.reactiveReal}</p>
            </Card>
          </div>
          <p className="mt-6 text-sm max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
            {text.controlBridge}
          </p>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <SectionHeading title={text.supportTitle} />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              [text.supportCard1, text.supportCard1a, text.supportCard1b],
              [text.supportCard2, text.supportCard2a, text.supportCard2b],
              [text.supportCard3, text.supportCard3a, text.supportCard3b],
              [text.supportCard4, text.supportCard4a, text.supportCard4b],
            ].map(([title, suggest, guide]) => (
              <Card key={title}>
                <p className="font-semibold" style={{ color: 'var(--text)' }}>{title}</p>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{suggest}</p>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--text)' }}>{guide}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="insights" className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container>
          <SectionHeading title={text.highlightTitle} subtitle={text.highlightLead} />
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[text.h1, text.h2, text.h3, text.h4, text.h5].map((item) => (
              <li key={item} className="rounded-xl border px-4 py-3 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', backgroundColor: 'var(--card-bg)' }}>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container>
          <SectionHeading title={text.metrics} />
          <div className="mt-8 grid lg:grid-cols-2 gap-5">
            <Card>
              <p className="mb-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.m1}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={reactionByType}>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                    <XAxis dataKey="round" stroke="var(--text-secondary)" />
                    <YAxis stroke="var(--text-secondary)" />
                    <Tooltip />
                    <Line type="monotone" dataKey="congruent" stroke="#22c55e" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="incongruent" stroke="var(--accent)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{text.m1i}</p>
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
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{text.m2i}</p>
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
                    <Bar dataKey="value" fill="var(--accent)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{text.m3i}</p>
            </Card>
            <Card>
              <p className="mb-3 text-sm font-medium" style={{ color: 'var(--text)' }}>{text.m4}</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={consistency}>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                    <XAxis dataKey="round" stroke="var(--text-secondary)" />
                    <YAxis stroke="var(--text-secondary)" />
                    <Tooltip />
                    <Line type="monotone" dataKey="stability" stroke="var(--accent)" strokeWidth={2} dot />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{text.m4i}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container narrow>
          <SectionHeading title={text.dashboardTitle} />
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              [text.dashboard1, text.dashboard1v],
              [text.dashboard2, text.dashboard2v],
              [text.dashboard3, text.dashboard3v],
              [text.dashboard4, text.dashboard4v],
            ].map(([k, v]) => (
              <Card key={k}>
                <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>{k}</p>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--text)' }}>{v}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container narrow>
          <Card>
            <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{text.sampleTitle}</h3>
            <p className="mt-4 whitespace-pre-line text-sm" style={{ color: 'var(--text-secondary)' }}>{text.sample}</p>
          </Card>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg)' }}>
        <Container narrow>
          <Card className="border-[var(--accent)]/30">
            <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{text.disclaimerTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {[text.d1, text.d2, text.d3, text.d4].map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: 'var(--text)' }}>
              <ShieldCheck className="w-4 h-4" />
              {text.nonClinical}
            </div>
          </Card>
        </Container>
      </section>

      <section className="section-padding-tight" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <Container narrow>
          <div className="text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--text)' }}>
              {text.finalTitle}
            </h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/games/coming-soon" className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium">
                {text.finalExplore}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="/#demo" className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--panel-hover)]" style={{ borderColor: 'var(--border)' }}>
                {text.finalContact}
              </a>
              <Link to="/about" className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--panel-hover)]" style={{ borderColor: 'var(--border)' }}>
                {text.finalLearn}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
