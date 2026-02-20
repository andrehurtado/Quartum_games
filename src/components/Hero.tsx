import { ChevronDown, Mail } from 'lucide-react'
import { BRAND, TRUST_CUES, CONTACT } from '@/constants'
import { trackCTA } from '@/analytics'
import { Container } from '@/components/ui/Container'
import { HardwarePlaceholder } from '@/components/HardwarePlaceholder'

const HARDWARE_ITEMS = [
  { id: 'tablet', name: 'Tablet Station', tagline: 'Plug & play' },
  { id: 'arcade', name: 'Arcade + Projector', tagline: 'Light install' },
  { id: 'projection', name: 'Full Projection', tagline: 'Premium' },
] as const

export function Hero() {
  const scrollToHardware = () => {
    document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })
  }
  const mailto = `mailto:${CONTACT.salesEmail}`

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <Container>
        <div className="section-padding pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-14 items-center">
            <div>
              <h1
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                style={{ color: 'var(--text)' }}
              >
                {BRAND.tagline}
              </h1>
              <p
                className="mt-4 text-lg max-w-xl"
                style={{ color: 'var(--text-soft)' }}
              >
                {BRAND.subline}
              </p>
              <ul
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm"
                role="list"
                style={{ color: 'var(--muted)' }}
              >
                {TRUST_CUES.map((cue) => (
                  <li key={cue} className="flex items-center gap-2">
                    <span style={{ color: 'var(--accent)' }} aria-hidden>✓</span>
                    {cue}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToHardware}
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  style={{
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-soft)',
                  }}
                >
                  See Hardware
                  <ChevronDown className="w-4 h-4" aria-hidden />
                </button>
                <a
                  href={mailto}
                  onClick={() => trackCTA({ type: 'cta_click', label: 'Contact', section: 'hero' })}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  style={{ color: 'var(--accent)' }}
                >
                  <Mail className="w-4 h-4" aria-hidden />
                  Contact
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {HARDWARE_ITEMS.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="aspect-[3/4] min-h-[140px] sm:min-h-[180px]">
                    <HardwarePlaceholder
                      variant={
                        item.id === 'tablet'
                          ? 'tablet'
                          : item.id === 'arcade'
                            ? 'arcade'
                            : 'projection'
                      }
                      className="h-full w-full"
                    />
                  </div>
                  <p
                    className="mt-2 text-center text-xs font-medium sm:text-sm"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-center text-xs"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
