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
        ? 'p-4'
        : padding === 'md'
          ? 'p-6 sm:p-8'
          : 'p-8 sm:p-10'

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${paddingClass} ${
        hover ? 'hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-strong)] hover:-translate-y-0.5' : ''
      } ${className}`}
      style={{
        backgroundColor: 'var(--panel)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow)',
      }}
    >
      {children}
    </div>
  )
}
