import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLocale } from '@/contexts/LocaleContext'
import { Container } from '@/components/ui/Container'
import { ContactAnchorLink } from '@/components/ContactAnchorLink'
import type { LocaleId } from '@/translations'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [gamesOpen, setGamesOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, localeLabel } = useLocale()

  const text = {
    en: {
      home: 'Home',
      explore: 'Explore Games',
      lowrider: 'Lowrider',
      soon: 'Coming Soon',
      about: 'About Us',
      contact: 'Contact',
      themeDark: 'Switch to light mode',
      themeLight: 'Switch to dark mode',
      menu: 'Toggle menu',
      lang: 'Select language',
    },
    es: {
      home: 'Inicio',
      explore: 'Explorar juegos',
      lowrider: 'Lowrider',
      soon: 'Próximamente',
      about: 'Sobre nosotros',
      contact: 'Contacto',
      themeDark: 'Cambiar a modo claro',
      themeLight: 'Cambiar a modo oscuro',
      menu: 'Abrir menú',
      lang: 'Seleccionar idioma',
    },
    de: {
      home: 'Startseite',
      explore: 'Spiele entdecken',
      lowrider: 'Lowrider',
      soon: 'Demnächst',
      about: 'Über uns',
      contact: 'Kontakt',
      themeDark: 'Zu hellem Modus wechseln',
      themeLight: 'Zu dunklem Modus wechseln',
      menu: 'Menü öffnen',
      lang: 'Sprache wählen',
    },
  }[locale]

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
            href="/"
            className="font-display font-semibold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded"
            style={{ color: 'var(--text)' }}
          >
            Quartum Games
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            <NavLink to="/" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">
              {text.home}
            </NavLink>
            <div className="relative">
              <button
                type="button"
                onClick={() => setGamesOpen((v) => !v)}
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]"
              >
                {text.explore}
                <ChevronDown className="w-4 h-4" />
              </button>
              {gamesOpen && (
                <div
                  className="absolute mt-2 min-w-44 rounded-lg border p-2"
                  style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}
                >
                  <NavLink to="/games/lowrider" onClick={() => setGamesOpen(false)} className="block rounded px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--panel-hover)] hover:text-[var(--text)]">
                    {text.lowrider}
                  </NavLink>
                  <NavLink to="/games/coming-soon" onClick={() => setGamesOpen(false)} className="block rounded px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--panel-hover)] hover:text-[var(--text)]">
                    {text.soon}
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/about" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">
              {text.about}
            </NavLink>
            <ContactAnchorLink className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">
              {text.contact}
            </ContactAnchorLink>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <div
              className="flex rounded-lg border overflow-hidden"
              style={{ borderColor: 'var(--border)' }}
              role="group"
              aria-label={text.lang}
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
              aria-label={theme === 'dark' ? text.themeDark : text.themeLight}
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
              aria-label={text.menu}
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
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-left py-3 px-2 text-sm font-medium rounded-lg text-[var(--text-secondary)]">{text.home}</Link>
            <Link to="/games/lowrider" onClick={() => setMenuOpen(false)} className="text-left py-3 px-2 text-sm font-medium rounded-lg text-[var(--text-secondary)]">{text.lowrider}</Link>
            <Link to="/games/coming-soon" onClick={() => setMenuOpen(false)} className="text-left py-3 px-2 text-sm font-medium rounded-lg text-[var(--text-secondary)]">{text.soon}</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-left py-3 px-2 text-sm font-medium rounded-lg text-[var(--text-secondary)]">{text.about}</Link>
            <ContactAnchorLink onClick={() => setMenuOpen(false)} className="text-left py-3 px-2 text-sm font-medium rounded-lg text-[var(--text-secondary)]">{text.contact}</ContactAnchorLink>
          </nav>
        </div>
      )}
    </header>
  )
}
