import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const variantClasses = {
  primary:
    'bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
  secondary:
    'border border-[var(--border-strong)] bg-transparent text-[var(--text-soft)] hover:bg-[var(--panel-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
  ghost:
    'text-[var(--text-soft)] hover:bg-[var(--panel-hover)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
}

export function Button(props: ButtonProps) {
  const {
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    ...rest
  } = props

  const classes = `inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (props.as === 'a') {
    const { as: _a, href, ...aProps } = rest as ButtonAsAnchor
    return (
      <a href={href} className={classes} {...aProps}>
        {children}
      </a>
    )
  }

  const { as: _b, ...buttonProps } = rest as ButtonAsButton
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
