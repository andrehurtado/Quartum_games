import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const SPANISH_VIDEO_SRC =
  'https://pub-9ded73e459ac487a930a047021d54ad5.r2.dev/QuartumGroup_Video_Presentacion_1080p.mp4'
const SPANISH_VIDEO_POSTER = '/extras/Poster_Image.png'

export function SpanishLandingVideoSection() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24"
      style={{ backgroundColor: 'var(--bg)' }}
      aria-labelledby="presentacion-quartum"
    >
      <Container>
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <h2
              id="presentacion-quartum"
              className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
              style={{ color: 'var(--text)' }}
            >
              Conoce Quartum Games en 1 minuto
            </h2>
            <p className="mt-3 text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
              Mira cómo transformamos espacios en experiencias interactivas.
            </p>
          </div>

          <Card hover={false} padding="none" className="mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <video
                controls
                preload="metadata"
                playsInline
                poster={SPANISH_VIDEO_POSTER}
                className="block h-full w-full rounded-2xl object-cover"
              >
                <source src={SPANISH_VIDEO_SRC} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
