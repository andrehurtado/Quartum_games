import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Quote } from 'lucide-react'

const QUOTES = [
  {
    quote: 'We wanted something that set us apart. The projection system turned our lounge into a real attraction — dwell time went up and people actually ask about it.',
    attribution: 'Recreational Tech Center Owner',
    location: 'Belgium',
  },
  {
    quote: "The tablet stations were a no-brainer. Kids are calmer in the waiting room, and we didn't need any extra wiring or install. Just plug and go.",
    attribution: 'Dental Office Manager',
    location: 'Netherlands',
  },
] as const

export function Testimonials() {
  const { ref, visible } = useVisible()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container narrow>
        <SectionHeading
          title="What early customers say"
          subtitle="Early adopters on engagement, ease of use, and fit for their spaces."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {QUOTES.map((t) => (
            <Card key={t.attribution} hover>
              <Quote className="w-8 h-8 mb-4" style={{ color: 'var(--accent)', opacity: 0.7 }} aria-hidden />
              <p className="leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="not-italic font-semibold" style={{ color: 'var(--text)' }}>{t.attribution}</cite>
                <span className="text-sm ml-1" style={{ color: 'var(--muted)' }}> — {t.location}</span>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
