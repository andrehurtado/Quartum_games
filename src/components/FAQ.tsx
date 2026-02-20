import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ITEMS = [
  {
    q: 'How long does installation take?',
    a: "Tablet stations are plug & play — you can be live the same day. Arcade + projector typically needs a few hours for light install. Full projection systems may require a day or more depending on space and wiring. We'll give you a clear timeline when you request a demo.",
  },
  {
    q: 'What does the subscription include?',
    a: 'Your monthly subscription includes access to the curated game catalog, regular software and content updates, and hardware support and maintenance. No per-game fees.',
  },
  {
    q: "What's the replacement and maintenance policy?",
    a: "Maintenance is part of your subscription. We cover support and, where applicable, swap/replace options — especially for the tablet tier — with contract protection so you're not left without coverage.",
  },
  {
    q: "What's the contract length?",
    a: "Contract terms depend on tier and location. We'll outline options when we prepare your quote after a demo.",
  },
  {
    q: 'What are the space requirements?',
    a: "Tablet stations need minimal space (e.g. a counter or stand). Arcade + projector needs a stable surface and projection area. Full projection systems need more room for hardware and projection. We'll help you match a tier to your space.",
  },
  {
    q: 'Are the systems safe and durable for high-traffic areas?',
    a: 'Yes. Hardware is built for commercial use and high-traffic environments. We design for durability and safe use in waiting rooms and recreational spaces.',
  },
] as const

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)
  const { ref, visible } = useVisible()

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      <Container narrow>
        <SectionHeading
          title="Frequently asked questions"
          subtitle="Installation, subscription, maintenance, and more."
        />
        <dl className="mt-10 space-y-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.q}
              className="rounded-xl border overflow-hidden transition-colors"
              style={{ borderColor: 'var(--border)' }}
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenId(openId === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 text-left font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ring)]"
                  style={{
                    color: 'var(--text)',
                    backgroundColor: openId === i ? 'var(--panel-hover)' : 'transparent',
                  }}
                  aria-expanded={openId === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  {item.q}
                  <span className="shrink-0" style={{ color: 'var(--muted)' }} aria-hidden>
                    {openId === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={openId === i ? 'block' : 'hidden'}
              >
                <p
                  className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t pt-2 text-sm leading-relaxed"
                  style={{ color: 'var(--text-soft)', borderColor: 'var(--border)' }}
                >
                  {item.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
