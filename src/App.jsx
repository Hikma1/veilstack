import { useEffect, useState } from "react"

export default function App() {
  const [text, setText] = useState("")
  const [activeProject, setActiveProject] = useState(null)

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

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id)
  }

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
            Tech Student • Embedded Systems • Web
          </p>
        </div>

        {/* TERMINAL */}
        <div className="border border-purple-500/30 rounded-xl p-6 bg-black/60 backdrop-blur-md mb-16">
          <pre className="text-lg md:text-xl text-purple-200 whitespace-pre-wrap">
            {text}
            <span className="text-cyan-300 animate-pulse">▍</span>
          </pre>
        </div>

        {/* PROJECTS */}
        <div className="mt-10">
          <h3 className="text-xl text-cyan-300 mb-8 tracking-widest">
            / system_modules
          </h3>

          <div className="space-y-6">

            {/* PROJECT 1 */}
            <div onClick={() => toggleProject("email")} className="group cursor-pointer relative overflow-hidden border border-purple-500/20 rounded-xl p-5 bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              <div className="flex justify-between">
                <div>
                  <p className="text-purple-200">Email Spam Classifier</p>
                  <p className="text-xs text-gray-500">ML-based email filtering</p>
                </div>
                <span className="text-sm text-gray-400">ML</span>
              </div>

              {activeProject === "email" && (
                <div className="mt-4 border-t border-purple-500/20 pt-4 animate-fadeIn text-sm text-gray-300">
                  <p>Detects spam using NLP and machine learning models.</p>
                  <p className="text-xs text-gray-400 mt-2">Tech: Python, Scikit-learn</p>
                </div>
              )}
            </div>

            {/* PROJECT 2 */}
            <div onClick={() => toggleProject("food")} className="group cursor-pointer relative overflow-hidden border border-cyan-500/20 rounded-xl p-5 bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              <div className="flex justify-between">
                <div>
                  <p className="text-cyan-200">Food Delivery App</p>
                  <p className="text-xs text-gray-500">Full-stack web app</p>
                </div>
                <span className="text-sm text-gray-400">Web</span>
              </div>

              {activeProject === "food" && (
                <div className="mt-4 border-t border-cyan-500/20 pt-4 animate-fadeIn text-sm text-gray-300">
                  <p>Real-time ordering system with backend integration.</p>
                  <p className="text-xs text-gray-400 mt-2">Tech: React, Node, MySQL</p>
                </div>
              )}
            </div>

            {/* PROJECT 3 */}
            <div onClick={() => toggleProject("voice")} className="group cursor-pointer relative overflow-hidden border border-fuchsia-500/20 rounded-xl p-5 bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]">
              <div className="flex justify-between">
                <div>
                  <p className="text-fuchsia-200">Voice Note Taker</p>
                  <p className="text-xs text-gray-500">Speech → text system</p>
                </div>
                <span className="text-sm text-gray-400">AI</span>
              </div>

              {activeProject === "voice" && (
                <div className="mt-4 border-t border-fuchsia-500/20 pt-4 animate-fadeIn text-sm text-gray-300">
                  <p>Converts voice into structured digital notes.</p>
                  <p className="text-xs text-gray-400 mt-2">Tech: JS, Web Speech API</p>
                </div>
              )}
            </div>

            {/* PROJECT 4 */}
            <div onClick={() => toggleProject("password")} className="group cursor-pointer relative overflow-hidden border border-yellow-500/20 rounded-xl p-5 bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
              <div className="flex justify-between">
                <div>
                  <p className="text-yellow-200">Password Analyzer</p>
                  <p className="text-xs text-gray-500">Security tool</p>
                </div>
                <span className="text-sm text-gray-400">Security</span>
              </div>

              {activeProject === "password" && (
                <div className="mt-4 border-t border-yellow-500/20 pt-4 animate-fadeIn text-sm text-gray-300">
                  <p>Evaluates password strength and vulnerabilities.</p>
                  <p className="text-xs text-gray-400 mt-2">Tech: JS, Algorithms</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}