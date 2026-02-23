import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useVisible } from '@/hooks/useVisible'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const FAQ_KEYS = ['faq1q', 'faq2q', 'faq3q', 'faq4q', 'faq5q', 'faq6q'] as const
const FAQ_ANSWER_KEYS = ['faq1a', 'faq2a', 'faq3a', 'faq4a', 'faq5a', 'faq6a'] as const

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)
  const { ref, visible } = useVisible()
  const { t } = useLocale()

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg-elevated)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container narrow>
        <SectionHeading
          title={t('faqTitle')}
          subtitle={t('faqSubtitle')}
        />
        <dl className="mt-10 space-y-4">
          {FAQ_KEYS.map((qKey, i) => (
            <div
              key={qKey}
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
                  {t(qKey)}
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
                  {t(FAQ_ANSWER_KEYS[i])}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
