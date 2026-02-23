import { useVisible } from '@/hooks/useVisible'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Package, Truck, RefreshCw, Shield } from 'lucide-react'

const STEPS = [
  {
    step: 1,
    title: 'Choose a tier',
    description: 'Pick the hardware level that fits your space and budget — tablet, arcade + projector, or full projection.',
    icon: Package,
  },
  {
    step: 2,
    title: 'We ship or install',
    description: 'Hardware is delivered and, where needed, installed. Light install for arcade/projector; full install for projection systems.',
    icon: Truck,
  },
  {
    step: 3,
    title: 'Monthly subscription',
    description: 'Your subscription bundles the curated game catalog, software updates, and hardware support and maintenance.',
    icon: RefreshCw,
  },
  {
    step: 4,
    title: 'Swap and replace',
    description: 'Especially for the tablet tier: swap or replace options with contract protection so you stay covered.',
    icon: Shield,
  },
] as const

export function HowItWorks() {
  const { ref, visible } = useVisible()

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-padding transition-all ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      style={{ backgroundColor: 'var(--bg)', transitionDuration: '400ms', transitionTimingFunction: 'var(--ease-smooth)' }}
    >
      <Container narrow>
        <SectionHeading
          title="How it works"
          subtitle="From choice to go-live, then ongoing support — all per location."
        />
        <ol className="mt-12 space-y-10 sm:space-y-12" role="list">
          {STEPS.map((item, i) => (
            <li key={item.step} className="relative flex gap-6 sm:gap-8">
              <div
                className="flex shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
              >
                <item.icon className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text)' }}>
                  {item.title}
                </h3>
                <p className="mt-2" style={{ color: 'var(--text-soft)' }}>{item.description}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="absolute left-5 top-12 w-0.5 h-[calc(100%+2rem)] -bottom-10 hidden sm:block"
                  style={{ backgroundColor: 'var(--border)' }}
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
