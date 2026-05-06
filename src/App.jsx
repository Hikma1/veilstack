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
    <div className="min-h-screen bg-black text-white p-6 font-mono">

      {/* HEADER */}
      <h1 className="text-4xl text-purple-400 font-bold mb-2">
        Hikma Ibrahim
      </h1>
      <h2 className="text-2xl text-cyan-400 mb-6">
        VeilStack
      </h2>

      {/* TERMINAL */}
      <div className="border border-purple-500 p-4 mb-10">
        <pre>
          {text}
          <span>▍</span>
        </pre>
      </div>

      {/* PROJECTS */}
      <h3 className="text-purple-400 mb-4">/ system_modules</h3>

      {/* PROJECT 1 */}
      <div onClick={() => toggleProject("email")} className="border p-4 mb-4 cursor-pointer">
        <p>Email Spam Classifier</p>

        {activeProject === "email" && (
          <div className="mt-3 text-sm">
            <p>ML-based spam detection system.</p>
            <a
              href="https://github.com/Hikma1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              GitHub
            </a>
          </div>
        )}
      </div>

      {/* PROJECT 2 */}
      <div onClick={() => toggleProject("food")} className="border p-4 mb-4 cursor-pointer">
        <p>Food Delivery App</p>

        {activeProject === "food" && (
          <div className="mt-3 text-sm">
            <p>Full-stack food ordering system.</p>
          </div>
        )}
      </div>

    </div>
  )
}