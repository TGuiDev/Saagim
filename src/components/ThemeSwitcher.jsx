import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../theme/useTheme'

function ThemeSwitcher({ className = '' }) {
  const { currentTheme, setThemeId, themes } = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const otherThemes = themes.filter((theme) => theme.id !== currentTheme.id)

  return (
    <div
      ref={rootRef}
      className={`theme-switcher ${open ? 'is-open' : ''} ${className}`.trim()}
    >
      <span className="theme-switcher-label">Tema</span>
      <button
        type="button"
        ref={triggerRef}
        className="theme-switcher-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`Tema atual: ${currentTheme.label}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span
          className="theme-switcher-core"
          style={{ '--theme-switcher-color': currentTheme.vars['--theme-accent'] }}
        />
      </button>

      <div className="theme-switcher-menu" role="menu" aria-label="Outros temas">
        {otherThemes.map((theme, index) => (
          <button
            key={theme.id}
            type="button"
            role="menuitemradio"
            aria-checked={false}
            aria-label={`Trocar para ${theme.label}`}
            className="theme-switcher-option"
            style={{
              '--theme-switcher-color': theme.vars['--theme-accent'],
              '--theme-switcher-delay': `${index * 28}ms`,
            }}
            onClick={() => {
              setThemeId(theme.id, triggerRef.current)
              setOpen(false)
            }}
          >
            <span className="theme-switcher-option-dot" />
            <span className="theme-switcher-option-text">{theme.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSwitcher
