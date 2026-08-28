function SocialMediaButton(props) {
  return (
    <a
      className={`
        group
        relative
        flex items-center justify-center
        size-7 sm:size-11 lg:size-12
        rounded-full
        p-2 sm:p-2.5
        bg-black/5 dark:bg-[#2a2e2c]
        border border-black/10 dark:border-white/10
        backdrop-blur-sm
        hover:border-black/20 dark:hover:border-white/30
        hover:scale-110
        hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#2F3332]
      `}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.alt}
    >
      <img
        className={`
          size-full object-contain
          dark:invert
          opacity-70
          group-hover:opacity-100
          group-hover:scale-110
          transition-all duration-300
        `}
        src={props.img}
        alt={props.alt}
      />

      <span
        className={`
          absolute inset-0 rounded-full
          bg-black/0 group-hover:bg-black/5
          dark:bg-white/0 dark:group-hover:bg-white/5
          transition-colors duration-300
          -z-10
        `}
      />

      <span
        className="
          absolute inset-0 rounded-full
          border border-black/10 dark:border-white/20
          animate-[ping_2.5s_ease-in-out_infinite]
          -z-20
        "
      />
    </a>
  )
}

export default SocialMediaButton