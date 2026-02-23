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
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
