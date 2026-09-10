import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import SocialMediaButton from './SocialMediaButton'
import HeaderName from './HeaderName'
import ThemeToggle from './ThemeToggle'

const navLinkClasses = ({ isActive }) => `
  relative
  text-[13px] sm:text-sm
  font-medium
  uppercase
  tracking-[0.12em]
  py-1
  transition-colors duration-200
  after:content-['']
  after:absolute after:left-0 after:-bottom-1
  after:h-px
  after:bg-black dark:after:bg-white
  after:transition-all after:duration-300
  ${isActive
    ? 'text-black dark:text-white after:w-full'
    : 'text-black/40 dark:text-white/40 hover:text-black/75 dark:hover:text-white/75 after:w-0 hover:after:w-full'
  }
`

const mobileNavLinkClasses = ({ isActive }) => `
  block w-full px-4 py-3
  text-sm font-medium uppercase tracking-[0.1em]
  border-l-2
  transition-colors duration-200
  ${isActive
    ? 'text-black dark:text-white border-black/60 dark:border-white/60 bg-black/[0.03] dark:bg-white/[0.03]'
    : 'text-black/40 dark:text-white/40 border-transparent hover:text-black/75 dark:hover:text-white/75 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]'
  }
`

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header relative bg-white dark:bg-[#2F3332] border-b border-black/10 dark:border-black/40">

      <div className="min-h-[4.5rem] px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">

        <div className="sm:hidden shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-black/40 border border-black/10 dark:border-black font-mono whitespace-nowrap">
          <span className="text-black/70 dark:text-white text-xs select-none">{'>'}</span>
          <span className="text-xs text-black/80 dark:text-white tracking-wide">JaimeMrF</span>
        </div>

        <section
          className="hidden sm:block sm:w-56 lg:w-80 shrink-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
          }}
        >
          <HeaderName text="Jaime Alejandro Vega Barbosa" />
        </section>

        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10 flex-1 lg:-translate-x-10">
          <NavLink to="/" className={navLinkClasses} end>Sobre mí</NavLink>
          <NavLink to="/proyectos" className={navLinkClasses}>Proyectos</NavLink>
          <NavLink to="/contacto" className={navLinkClasses}>Contacto</NavLink>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0 md:pl-4 md:border-l md:border-black/10 md:dark:border-white/10">
          <ThemeToggle />

          <SocialMediaButton img={github} url="https://github.com/JaimeMrF" alt="GitHub" />
          <SocialMediaButton img={linkedin} url="https://linkedin.com/in/tu-usuario" alt="LinkedIn" />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              md:hidden
              flex items-center justify-center
              size-10
              rounded-full
              border border-black/10 dark:border-white/10
              hover:bg-black/5 dark:hover:bg-white/5
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30
            "
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isMenuOpen ? 'top-1.5 rotate-45' : 'top-0 rotate-0'}`} />
              <span className={`absolute left-0 top-1.5 w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isMenuOpen ? 'top-1.5 -rotate-45' : 'top-3 rotate-0'}`} />
            </div>
          </button>
        </div>

      </div>

      <nav
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          bg-black/5 dark:bg-black/20 border-t border-black/10 dark:border-black/40
          ${isMenuOpen ? 'max-h-52' : 'max-h-0'}
        `}
      >
        <NavLink to="/" className={mobileNavLinkClasses} end onClick={() => setIsMenuOpen(false)}>Sobre mí</NavLink>
        <NavLink to="/proyectos" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Proyectos</NavLink>
        <NavLink to="/contacto" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Contacto</NavLink>
      </nav>

      <div
        className="
          absolute left-0 right-0 -bottom-6
          h-6
          bg-gradient-to-b from-black/30 dark:from-black/30 to-transparent
          pointer-events-none
          z-10
        "
      />

    </header>
  )
}

export default Header