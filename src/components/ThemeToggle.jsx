import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      className="
        relative
        flex items-center justify-center
        size-9 sm:size-10
        rounded-full
        border border-black/10 dark:border-white/10
        hover:bg-black/5 dark:hover:bg-white/5
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30
      "
    >
      <span className="relative size-5 block">
        {/* Sol */}
        <svg
          className={`
            absolute inset-0 size-5
            text-black/70
            transition-all duration-500 ease-out
            ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}
          `}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Luna */}
        <svg
          className={`
            absolute inset-0 size-5
            text-white/70
            transition-all duration-500 ease-out
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}
          `}
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>
    </button>
  )
}

export default ThemeToggle