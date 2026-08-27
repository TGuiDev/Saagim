import { useCallback, useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import { ThemeContext } from './ThemeStore'
import { defaultThemeId, themes } from './themes'

const THEME_STORAGE_KEY = 'saagim-theme'

function applyThemeToDocument(theme) {
  if (!theme) return
  const root = document.documentElement
  root.setAttribute('data-theme', theme.id)

  if (theme.vars) {
    Object.entries(theme.vars).forEach(([token, value]) => {
      root.style.setProperty(token, value)
    })
  }
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeIdState] = useState(() => {
    const storedThemeId = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_STORAGE_KEY) : null
    return themes.some((theme) => theme.id === storedThemeId) ? storedThemeId : defaultThemeId
  })

  const currentTheme = useMemo(
    () => themes.find((theme) => theme.id === themeId) ?? themes[0],
    [themeId],
  )

  useEffect(() => {
    applyThemeToDocument(currentTheme)
    window.localStorage.setItem(THEME_STORAGE_KEY, currentTheme.id)
  }, [currentTheme])

  const setThemeId = useCallback((nextThemeId) => {
    if (nextThemeId === themeId) {
      return
    }

    const nextTheme = themes.find((theme) => theme.id === nextThemeId) ?? themes[0]
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canTransition = typeof document.startViewTransition === 'function' && !reduceMotion

    if (!canTransition) {
      applyThemeToDocument(nextTheme)
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme.id)
      setThemeIdState(nextThemeId)
      return
    }

    try {
      document.startViewTransition(() => {
        applyThemeToDocument(nextTheme)
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme.id)
        flushSync(() => {
          setThemeIdState(nextThemeId)
        })
      })
    } catch {
      applyThemeToDocument(nextTheme)
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme.id)
      setThemeIdState(nextThemeId)
    }
  }, [themeId])

  const value = useMemo(
    () => ({
      themeId,
      themes,
      currentTheme,
      setThemeId,
    }),
    [themeId, currentTheme, setThemeId],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
