/**
 * Quartum Games — editable brand and contact constants
 */

export const CONTACT = {
  salesEmail: 'salesquartumgroup@gmail.com',
  phone: '+34 600 308 485', // optional; set to empty string to hide
} as const

/** "Starting at" pricing labels — edit for your market. Do not show exact prices unless as "starting at". */
export const PRICING_LABELS = {
  tablet: 'Low upfront · Strong monthly',
  arcadeProjector: 'Mid upfront · Strong monthly',
  fullProjection: 'Higher upfront · Strongest monthly',
} as const

export const PRICING_NOTE =
  'Pricing depends on location size and hardware tier. Request a demo for a quote.'

export const BRAND = {
  tagline: 'Modular interactive game systems for modern experiential spaces',
  subline: 'Premium interactive experiences for recreational tech centers and waiting rooms',
  company: 'Quartum Games',
  parent: 'Quartum Group',
  regionNote: 'Serving locations across Europe.',
} as const

export const TRUST_CUES = [
  'Made for Europe',
  'Per-location service',
  'Maintenance included',
  'Curated catalog',
] as const

/** Secondary CTA label (replaces "Request a Demo" — used in final CTA + footer only) */
export const DEMO_CTA_LABEL = 'Schedule a walkthrough'
