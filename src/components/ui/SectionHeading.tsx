import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export function SectionHeading({ title, subtitle, children, className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-[var(--text-soft)]" style={{ color: 'var(--text-soft)' }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
