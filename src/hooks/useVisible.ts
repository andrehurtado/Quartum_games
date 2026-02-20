import { useEffect, useRef, useState } from 'react'

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px 0px -8% 0px',
  threshold: 0.1,
}

export function useVisible(options: IntersectionObserverInit = defaultOptions) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      options
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options.rootMargin, options.threshold])

  return { ref, visible }
}
