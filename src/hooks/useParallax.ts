import { useEffect, useState, useRef } from 'react'

/**
 * Subtle parallax: returns a translateY offset based on scroll position.
 * Ref is the element to track; strength is a small multiplier (e.g. 0.05).
 */
export function useParallax(strength = 0.05) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const diff = viewportCenter - centerY
      setOffset(diff * strength)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [strength])

  return { ref, offset }
}
