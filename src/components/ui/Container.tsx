import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  narrow?: boolean
}

export function Container({ children, className = '', narrow }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${narrow ? 'max-w-3xl' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
