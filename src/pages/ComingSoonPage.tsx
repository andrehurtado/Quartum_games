import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export function ComingSoonPage() {
  const { locale } = useLocale()
  const text = {
    en: {
      title: 'Coming Soon',
      body: 'New insight-driven game experiences are in development. Check back soon for upcoming releases.',
    },
    es: {
      title: 'Próximamente',
      body: 'Estamos desarrollando nuevas experiencias de juego basadas en insights. Vuelve pronto para próximos lanzamientos.',
    },
    de: {
      title: 'Demnächst',
      body: 'Neue insight-basierte Spielerlebnisse sind in Entwicklung. Schauen Sie bald wieder vorbei.',
    },
  }[locale]

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <Container narrow>
        <Card>
          <h1 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            {text.title}
          </h1>
          <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
            {text.body}
          </p>
        </Card>
      </Container>
    </section>
  )
}
