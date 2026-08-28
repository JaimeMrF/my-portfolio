import { useState, useEffect, useRef } from 'react'

const TYPING_SPEED = 70
const DELAY_BEFORE_OUTPUT = 200
const DELAY_BEFORE_NEXT_COMMAND = 500
const UBUNTU_ASCII = [
  '      .--.',
  '     |o_o |',
  '     |:_/ |',
  '    //   \\',
  '   (|     | )',
  "  /'\\_   _/|",
  '  \u005c___)=(___/',
].join('\n')

function Terminal({ commands }) {
  const [typedCommand, setTypedCommand] = useState("")
  const [completedSteps, setCompletedSteps] = useState([]) // [{ command, output }]
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [showOutput, setShowOutput] = useState(false)
  const charIndexRef = useRef(0)

  const allDone = currentCommandIndex >= commands.length

  // Tipeo del comando actual
  useEffect(() => {
    if (allDone) return
    const target = commands[currentCommandIndex].command

    if (charIndexRef.current < target.length) {
      const timeout = setTimeout(() => {
        charIndexRef.current++
        setTypedCommand(target.slice(0, charIndexRef.current))
      }, TYPING_SPEED)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setShowOutput(true), DELAY_BEFORE_OUTPUT)
      return () => clearTimeout(timeout)
    }
  }, [typedCommand, currentCommandIndex, allDone, commands])

  // Cuando se muestra el output, esperar y pasar al siguiente comando
  useEffect(() => {
    if (!showOutput) return

    const timeout = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, commands[currentCommandIndex]])
      setCurrentCommandIndex((prev) => prev + 1)
      setTypedCommand("")
      setShowOutput(false)
      charIndexRef.current = 0
    }, DELAY_BEFORE_NEXT_COMMAND)

    return () => clearTimeout(timeout)
  }, [showOutput, currentCommandIndex, commands])

    const Prompt = () => (
    <span className="inline-flex items-center flex-wrap">
        <span className="text-emerald-400/80">jaime</span>
        <span className="text-white/40">@</span>
        <span className="text-emerald-400/80">portfolio</span>
        <span className="text-white/40">:</span>
        <span className="text-white/50">~</span>
        <span className="text-white/60">$&nbsp;</span>
    </span>
    )

  return (
    <div
    className="
        w-full max-w-2xl
        rounded-xl overflow-hidden
        border border-black/20
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
        bg-[#1c201f]
    "
    >
    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#232625]">
        <span className="text-[11px] text-white/30 font-mono">zsh</span>
        <span className="flex gap-1.5">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        </span>
    </div>

    <div className="terminal-fastfetch">
      <pre className="ubuntu-ascii" aria-label="Ubuntu">{UBUNTU_ASCII}</pre>
      <div className="terminal-system-info">
        <strong>jaime@portfolio</strong>
        <span className="terminal-info-rule" />
        <p><b>OS</b> Ubuntu 24.04 LTS</p>
        <p><b>Host</b> Personal workspace</p>
        <p><b>Role</b> Systems engineering student</p>
        <p><b>Stack</b> Ubuntu · Bash · Git</p>
      </div>
    </div>

    <div className="px-4 py-4 sm:px-5 sm:py-5 font-mono text-[13px] sm:text-sm min-h-60">
        {/* resto igual, pero cambia los colores del prompt: */}
        {completedSteps.map((step, index) => (
          <div key={index}>
            <div>
              <Prompt />
              <span className="text-white">{step.command}</span>
            </div>
            <div className="flex flex-col text-white/70">
              {step.output.map((line, lineIndex) => (
                <p key={lineIndex} className={line === "" ? "h-3" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Comando actualmente en proceso */}
        {!allDone && (
          <div>
            <div className="flex items-center">
              <Prompt />
              <span className="text-white">{typedCommand}</span>
              {!showOutput && (
                <span className="ml-0.5 w-1.75 h-4 bg-emerald-400/80 animate-pulse" />
              )}
            </div>

            {showOutput && (
              <div className="flex flex-col text-white/70">
                {commands[currentCommandIndex].output.map((line, lineIndex) => (
                  <p key={lineIndex} className={line === "" ? "h-3" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Prompt final esperando, cuando todo terminó */}
        {allDone && (
          <div className="flex items-center">
            <Prompt />
            <span className="w-1.75 h-4 bg-emerald-400/80 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal