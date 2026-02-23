import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingClass =
    padding === 'none'
      ? ''
      : padding === 'sm'
        ? 'p-5'
        : padding === 'md'
          ? 'p-6 sm:p-8 lg:p-10'
          : 'p-8 sm:p-10 lg:p-12'

  return (
    <div
      className={`rounded-2xl border transition-all hover-lift ${paddingClass} ${
        hover ? 'hover:shadow-[var(--shadow-soft)] hover:border-[var(--border-strong)]' : ''
      } ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        boxShadow: 'var(--shadow)',
        transitionDuration: 'var(--duration-theme)',
        transitionTimingFunction: 'var(--ease-smooth)',
      }}
    >
      {children}
    </div>
  )
}
