import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

export type ThemeId = 'teal' | 'indigo' | 'emerald' | 'amber'

const STORAGE_KEY = 'quartum-theme'
const THEMES: { id: ThemeId; label: string }[] = [
  { id: 'teal', label: 'Teal' },
  { id: 'indigo', label: 'Indigo' },
  { id: 'emerald', label: 'Emerald' },
  { id: 'amber', label: 'Amber' },
]

type ThemeContextValue = {
  theme: ThemeId
  setTheme: (id: ThemeId) => void
  themes: typeof THEMES
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStored(): ThemeId {
  if (typeof window === 'undefined') return 'teal'
  const s = window.localStorage.getItem(STORAGE_KEY)
  if (s && (THEMES.some((t) => t.id === s))) return s as ThemeId
  return 'teal'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(readStored)

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id)
    try {
      window.localStorage.setItem(STORAGE_KEY, id)
    } catch {}
    document.documentElement.setAttribute('data-theme', id)
    document.documentElement.classList.add('theme-transition')
    setTimeout(() => document.documentElement.classList.remove('theme-transition'), 220)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
