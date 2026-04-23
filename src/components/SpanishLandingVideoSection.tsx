import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const SPANISH_VIDEO_SRC =
  'https://pub-9ded73e459ac487a930a047021d54ad5.r2.dev/QuartumGroup_Video_Presentacion_1080p.mp4'
const SPANISH_VIDEO_POSTER = '/extras/Poster_Image.png'

export function SpanishLandingVideoSection() {
  const [isActive, setIsActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!isActive || !videoRef.current) return
    videoRef.current.play().catch(() => {
      // Browser policy or race condition: controls remain available for manual play.
    })
  }, [isActive])

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
              {isActive ? (
                <video
                  ref={videoRef}
                  controls
                  preload="metadata"
                  playsInline
                  className="block h-full w-full rounded-2xl object-cover"
                >
                  <source src={SPANISH_VIDEO_SRC} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsActive(true)}
                  className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  aria-label="Reproducir video de presentación de Quartum Games"
                >
                  <img
                    src={SPANISH_VIDEO_POSTER}
                    alt="Vista previa del video de presentación de Quartum Games"
                    className="block h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 m-auto inline-flex h-14 w-14 items-center justify-center rounded-full border transition-transform duration-[var(--duration-theme)] group-hover:scale-105"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--accent) 45%, white)',
                      backgroundColor: 'color-mix(in srgb, var(--bg) 40%, transparent)',
                      boxShadow: 'var(--shadow-soft)',
                    }}
                    aria-hidden
                  >
                    <span
                      className="ml-0.5 inline-block h-0 w-0"
                      style={{
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderLeft: '12px solid var(--accent)',
                      }}
                    />
                  </span>
                </button>
              )}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
