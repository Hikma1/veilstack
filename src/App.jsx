import { useEffect, useState } from "react"

export default function App() {
  const [text, setText] = useState("")

  const fullText =
    "> whoami\n\nHikma Ibrahim\nVeilStack\nDeveloper | Cybersecurity | Embedded Systems | Web\n\nBuilding secure and meaningful technology"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white flex items-start justify-center px-6 py-16 font-mono">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/30"></div>

      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-[linear-gradient(to_right,#7C3AED_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-purple-600/50 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-cyan-500/40 blur-[120px] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl w-full">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-300 tracking-widest">
            Hikma Ibrahim
          </h1>

          <h2 className="text-3xl md:text-4xl text-cyan-300 mt-2">
            VeilStack
          </h2>

          <p className="text-gray-400 mt-4">
            Developer • Cybersecurity • Embedded Systems • Web
          </p>
        </div>

        {/* TERMINAL */}
        <div className="border border-purple-500/30 rounded-xl p-6 bg-black/60 backdrop-blur-md mb-16">
          <pre className="text-lg md:text-xl text-purple-200 whitespace-pre-wrap">
            {text}
            <span className="text-cyan-300 animate-pulse">▍</span>
          </pre>
        </div>
<div className="mt-20">

  <h3 className="text-xl text-purple-300 mb-8 tracking-widest">
    / system_modules
  </h3>

  <div className="space-y-6">

    {/* PROJECT CARD */}
    <div className="group relative overflow-hidden border border-purple-500/20 rounded-xl p-5 bg-black/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] cursor-pointer">
      
      {/* LEFT GLOW BAR */}
      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition"></div>

      {/* HOVER LIGHT SWEEP */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>

      <div className="relative flex justify-between items-center">
        <div>
          <p className="text-lg text-purple-200 group-hover:text-purple-300">
            Email Spam Classifier
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Detects malicious emails using machine learning
          </p>
        </div>
        <span className="text-sm text-gray-400">ML Security</span>
      </div>
    </div>

    <div className="group relative overflow-hidden border border-cyan-500/20 rounded-xl p-5 bg-black/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] cursor-pointer">
      
      <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>

      <div className="relative flex justify-between items-center">
        <div>
          <p className="text-lg text-cyan-200 group-hover:text-cyan-300">
            Food Delivery Web App
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Full-stack ordering system with real-time features
          </p>
        </div>
        <span className="text-sm text-gray-400">Full-stack</span>
      </div>
    </div>

    <div className="group relative overflow-hidden border border-fuchsia-500/20 rounded-xl p-5 bg-black/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-fuchsia-400/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] cursor-pointer">
      
      <div className="absolute left-0 top-0 h-full w-1 bg-fuchsia-400 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>

      <div className="relative flex justify-between items-center">
        <div>
          <p className="text-lg text-fuchsia-200 group-hover:text-fuchsia-300">
            Voice Note Taker
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Converts voice into structured digital notes
          </p>
        </div>
        <span className="text-sm text-gray-400">AI Interface</span>
      </div>
    </div>

    <div className="group relative overflow-hidden border border-yellow-500/20 rounded-xl p-5 bg-black/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] cursor-pointer">
      
      <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>

      <div className="relative flex justify-between items-center">
        <div>
          <p className="text-lg text-yellow-200 group-hover:text-yellow-300">
            Password Analyzer
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Evaluates password strength and security risks
          </p>
        </div>
        <span className="text-sm text-gray-400">Security Tool</span>
      </div>
    </div>

  </div>
</div>

      </div>
    </div>
  )
}