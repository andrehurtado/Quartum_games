import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}
      style={{
        backgroundColor: 'var(--accent-muted)',
        color: 'var(--accent)',
      }}
    >
      {children}
    </span>
  )
}
