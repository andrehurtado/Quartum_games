import type { CSSProperties, MouseEvent, ReactNode } from 'react'

type ContactAnchorLinkProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
  id?: string
}

const CONTACT_HASH = '#get-in-touch'
const CONTACT_PATH = `/${CONTACT_HASH}`

/**
 * Unified contact anchor behavior across the app.
 * - On home: smooth-scroll to the contact section.
 * - On other routes: navigate to /#get-in-touch.
 */
export function ContactAnchorLink({ children, className, style, onClick, id }: ContactAnchorLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    if (typeof window === 'undefined') return
    if (window.location.pathname !== '/') return

    const target = document.getElementById('get-in-touch')
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', CONTACT_HASH)
  }

  return (
    <a id={id} href={CONTACT_PATH} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  )
}
