import { useState, useRef, useEffect } from 'react'
import { Menu, X, Palette } from 'lucide-react'
import { CONTACT } from '@/constants'
import { trackCTA } from '@/analytics'
import { useTheme } from '@/contexts/ThemeContext'
import { Container } from '@/components/ui/Container'

const NAV_LINKS = [
  { id: 'tiers', label: 'Hardware' },
  { id: 'catalog', label: 'Catalog' },
  { id: 'how-it-works', label: 'How it Works' },
  { id: 'faq', label: 'FAQ' },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const themeRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme, themes } = useTheme()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const mailto = `mailto:${CONTACT.salesEmail}`

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(12, 18, 32, 0.75)',
        borderColor: 'var(--border)',
      }}
    >
      <Container>
        <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display font-semibold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded"
            style={{ color: 'var(--text)' }}
          >
            Quartum Games
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded px-1 py-2"
                style={{ color: 'var(--text-soft)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-soft)'
                }}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={mailto}
              onClick={() => trackCTA({ type: 'cta_click', label: 'Email Us', section: 'header' })}
              className="hidden sm:inline-flex text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded px-2 py-1.5"
              style={{ color: 'var(--text-soft)' }}
            >
              Email
            </a>

            <div className="relative" ref={themeRef}>
              <button
                type="button"
                onClick={() => setThemeOpen((o) => !o)}
                aria-expanded={themeOpen}
                aria-haspopup="listbox"
                aria-label="Choose theme"
                className="flex items-center justify-center w-9 h-9 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-soft)',
                  backgroundColor: themeOpen ? 'var(--panel-hover)' : 'transparent',
                }}
              >
                <Palette className="w-4 h-4" aria-hidden />
              </button>
              {themeOpen && (
                <div
                  role="listbox"
                  aria-label="Theme options"
                  className="absolute right-0 top-full mt-2 w-36 rounded-xl border py-2 shadow-lg"
                  style={{
                    backgroundColor: 'var(--panel)',
                    borderColor: 'var(--border)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      role="option"
                      aria-selected={theme === t.id}
                      type="button"
                      onClick={() => {
                        setTheme(t.id)
                        setThemeOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:bg-[var(--panel-hover)]"
                      style={{
                        color: theme === t.id ? 'var(--accent)' : 'var(--text-soft)',
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-soft)' }}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-elevated)' }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-left py-3 px-2 text-sm font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                style={{ color: 'var(--text-soft)' }}
              >
                {label}
              </button>
            ))}
            <a
              href={mailto}
              onClick={() => {
                trackCTA({ type: 'cta_click', label: 'Email Us', section: 'header_mobile' })
                setMenuOpen(false)
              }}
              className="py-3 px-2 text-sm font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              style={{ color: 'var(--text-soft)' }}
            >
              Email
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
