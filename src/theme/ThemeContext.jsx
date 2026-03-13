import { useCallback, useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import { ThemeContext } from './ThemeStore'
import { defaultThemeId, themes } from './themes'

const THEME_STORAGE_KEY = 'saagim-theme'

function applyThemeToDocument(theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme.id)

  Object.entries(theme.vars).forEach(([token, value]) => {
    root.style.setProperty(token, value)
  })
}

function setThemeTransitionOrigin(originElement) {
  if (!originElement) {
    return
  }

  const root = document.documentElement
  const rect = originElement.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const radius = Math.hypot(
    Math.max(centerX, window.innerWidth - centerX),
    Math.max(centerY, window.innerHeight - centerY),
  )

  root.style.setProperty('--theme-transition-x', `${centerX}px`)
  root.style.setProperty('--theme-transition-y', `${centerY}px`)
  root.style.setProperty('--theme-transition-radius', `${radius}px`)
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeIdState] = useState(() => {
    const storedThemeId = window.localStorage.getItem(THEME_STORAGE_KEY)
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

  const setThemeId = useCallback((nextThemeId, originElement) => {
    if (nextThemeId === themeId) {
      return
    }

    setThemeTransitionOrigin(originElement)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canTransition = typeof document.startViewTransition === 'function' && !reduceMotion

    if (!canTransition) {
      setThemeIdState(nextThemeId)
      return
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setThemeIdState(nextThemeId)
      })
    })
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
