import { useState, useEffect, useRef } from 'react'

const FULL_NAME = "Jaime Alejandro Vega Barbosa"
const SHORT_NAME = "JaimeMrF"

const TYPING_SPEED = 80
const DELETING_SPEED = 60
const PAUSE_AFTER_TYPE = 2000

function HeaderName() {
  const [display, setDisplay] = useState(FULL_NAME)
  const [phase, setPhase] = useState("pause-full")
  const indexRef = useRef(FULL_NAME.length)

  useEffect(() => {
    let timeout

    if (phase === "typing-full") {
      if (indexRef.current < FULL_NAME.length) {
        timeout = setTimeout(() => {
          setDisplay(FULL_NAME.slice(0, indexRef.current + 1))
          indexRef.current++
        }, TYPING_SPEED)
      } else {
        timeout = setTimeout(() => setPhase("pause-full"), PAUSE_AFTER_TYPE)
      }
    }

    if (phase === "pause-full") {
      timeout = setTimeout(() => setPhase("deleting-full"), 300)
    }

    if (phase === "deleting-full") {
      if (indexRef.current > 0) {
        timeout = setTimeout(() => {
          indexRef.current--
          setDisplay(FULL_NAME.slice(0, indexRef.current))
        }, DELETING_SPEED)
      } else {
        setPhase("typing-short")
      }
    }

    if (phase === "typing-short") {
      if (indexRef.current < SHORT_NAME.length) {
        timeout = setTimeout(() => {
          setDisplay(SHORT_NAME.slice(0, indexRef.current + 1))
          indexRef.current++
        }, TYPING_SPEED)
      } else {
        timeout = setTimeout(() => setPhase("pause-short"), PAUSE_AFTER_TYPE)
      }
    }

    if (phase === "pause-short") {
      timeout = setTimeout(() => setPhase("deleting-short"), 300)
    }

    if (phase === "deleting-short") {
      if (indexRef.current > 0) {
        timeout = setTimeout(() => {
          indexRef.current--
          setDisplay(SHORT_NAME.slice(0, indexRef.current))
        }, DELETING_SPEED)
      } else {
        setPhase("typing-full")
      }
    }

    return () => clearTimeout(timeout)
  }, [phase, display])

  const isPausing = phase === "pause-full" || phase === "pause-short"

  return (
    <div
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5 sm:px-3.5 sm:py-1.5
        rounded-full
        bg-black/5 dark:bg-black/40
        border border-black/10 dark:border-black
        shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]
        font-mono
        whitespace-nowrap
      `}
    >
      <span className="text-black/70 dark:text-white text-xs sm:text-sm select-none">{'>'}</span>
      <span className="text-xs sm:text-sm text-black/80 dark:text-white tracking-wide whitespace-nowrap">
        {display}
      </span>
      <span
        className={`text-black/80 dark:text-white text-xs sm:text-sm ${
          isPausing ? 'animate-ping' : 'animate-pulse'
        }`}
      >
        |
      </span>
    </div>
  )
}

export default HeaderName