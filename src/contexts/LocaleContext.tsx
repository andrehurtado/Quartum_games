import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'
import { type LocaleId, getTranslation } from '@/translations'

const STORAGE_KEY = 'quartum-locale'

type LocaleContextValue = {
  locale: LocaleId
  setLocale: (id: LocaleId) => void
  t: (key: string) => string
  localeLabel: (id: LocaleId) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const LOCALE_LABELS: Record<LocaleId, string> = {
  en: 'EN',
  es: 'ES',
  de: 'DE',
}

function readStored(): LocaleId {
  if (typeof window === 'undefined') return 'en'
  const s = window.localStorage.getItem(STORAGE_KEY)
  if (s === 'en' || s === 'es' || s === 'de') return s
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleId>(readStored)

  const setLocale = useCallback((id: LocaleId) => {
    setLocaleState(id)
    try {
      window.localStorage.setItem(STORAGE_KEY, id)
    } catch {}
  }, [])

  const t = useCallback(
    (key: string) => getTranslation(locale, key),
    [locale]
  )

  const localeLabel = useCallback((id: LocaleId) => LOCALE_LABELS[id], [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, localeLabel }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
