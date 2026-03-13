import { useState } from 'react'
import { HiBars3, HiMiniBolt, HiXMark } from 'react-icons/hi2'
import ThemeSwitcher from './ThemeSwitcher'
import { FaDiscord } from 'react-icons/fa'

function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="topbar relative z-90 mx-auto py-3 w-full max-w-6xl px-2 md:px-3">
      <div className="theme-nav-surface relative z-90 rounded-2xl px-3 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img className="rounded-md h-8 w-8" src="https://images-ext-1.discordapp.net/external/GdNL_bPLS83xuQv14ch82CjZtVCIzdmO7M-pXdPsdP4/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1074040581535309854/f9a6638cdddcc92b165a4aaac1e4bc33.png?format=webp&quality=lossless&width=692&height=692" alt="" />
            <div className="min-w-0">
              <p className="theme-text font-display truncate text-xl tracking-wide sm:text-2xl">SAAGIM TWO</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#sobre" className="theme-nav-link transition">Sobre</a>
            <a href="#diferenciais" className="theme-nav-link transition">Diferencial</a>
            <a href="#requisitos" className="theme-nav-link transition">Regras</a>
            <a href="#faq" className="theme-nav-link transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeSwitcher className="hidden md:flex" />

            <a
              href="https://discord.gg/saagimtwo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition sm:inline-flex sm:px-5 sm:text-sm"
            >
              <FaDiscord className="text-base" />
              Discord
            </a>

            <button
              type="button"
              className="theme-mobile-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl transition md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Abrir menu"
            >
              {open ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
            </button>
          </div>
        </div>

        <nav className={`grid overflow-hidden transition-all duration-300 md:hidden ${open ? 'mt-3 max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="theme-mobile-panel theme-text-muted rounded-xl p-3 text-sm font-semibold space-y-3">
            <a href="#sobre" onClick={closeMenu} className="theme-mobile-link block rounded-md px-2 py-2 transition">Sobre</a>
            <a href="#diferenciais" onClick={closeMenu} className="theme-mobile-link block rounded-md px-2 py-2 transition">Diferenciais</a>
            <a href="#requisitos" onClick={closeMenu} className="theme-mobile-link block rounded-md px-2 py-2 transition">Regras</a>
            <a href="#faq" onClick={closeMenu} className="theme-mobile-link block rounded-md px-2 py-2 transition">FAQ</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
