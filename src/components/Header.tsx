import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import type { LocaleId } from '@/translations'

const NAV_IDS = ['showcase', 'tiers', 'catalog', 'how-it-works', 'faq'] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, t, localeLabel } = useLocale()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLabels = [t('navHardware'), t('navTiers'), t('navCatalog'), t('navHowItWorks'), t('navFAQ')]

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        backdropFilter: `blur(var(--blur))`,
        WebkitBackdropFilter: `blur(var(--blur))`,
      }}
    >
      <Container>
        <div className="flex h-16 sm:h-[4.5rem] items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display font-semibold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded"
            style={{ color: 'var(--text)' }}
          >
            {t('brandName')}
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {NAV_IDS.map((id, i) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-sm font-medium transition-colors duration-[var(--duration-theme)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded px-1 py-2"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {navLabels[i]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <div
              className="flex rounded-lg border overflow-hidden"
              style={{ borderColor: 'var(--border)' }}
              role="group"
              aria-label={t('ariaLanguage')}
            >
              {(['en', 'es', 'de'] as LocaleId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLocale(id)}
                  className="min-w-[2.25rem] h-9 px-2 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  style={{
                    color: locale === id ? 'var(--text)' : 'var(--text-secondary)',
                    backgroundColor: locale === id ? 'var(--panel-hover)' : 'transparent',
                  }}
                >
                  {localeLabel(id)}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('ariaTheme') : t('ariaThemeLight')}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-[var(--duration-theme)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden /> : <Moon className="w-5 h-5" aria-hidden />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-[var(--duration-theme)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-expanded={menuOpen}
              aria-label={t('ariaMenu')}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {menuOpen && (
        <div
          className="md:hidden border-t px-5 py-5"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-elevated)' }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_IDS.map((id, i) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-left py-3 px-2 text-sm font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {navLabels[i]}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
