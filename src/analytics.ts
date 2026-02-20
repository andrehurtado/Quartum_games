/**
 * Analytics placeholder — track CTA clicks without external services.
 * Replace with your analytics provider (GA, Plausible, etc.) when ready.
 */

export type CTAEvent = {
  type: 'cta_click'
  label: string
  section?: string
  href?: string
}

export function trackCTA(event: CTAEvent): void {
  if (typeof window === 'undefined') return
  // TODO: send to your analytics endpoint or provider
  console.info('[Analytics]', event)
}
