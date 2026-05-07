import { useState } from "react"

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div className="app">

      {/* GRID */}
      <div className="grid-bg"></div>

      {/* GLOW */}
      <div className="purple-glow"></div>
      <div className="cyan-glow"></div>

      {/* CONTENT */}
      <div className="content">

        {/* HERO */}
        <div className="hero">
          <h1>Hikma Ibrahim</h1>
          <h2>VeilStack</h2>

          <p>
            Developer • Cybersecurity • Embedded Systems • Web
          </p>
        </div>

        {/* TERMINAL */}
        <div className="terminal">
          <pre>
{`> whoami

Hikma Ibrahim
VeilStack

Building secure and meaningful technology`}
          </pre>
        </div>

        {/* PROJECTS */}
        <div className="projects">

          <h3>/ system_modules</h3>

          {/* PROJECT */}
          <div
            className="project-card purple"
            onClick={() =>
              setActive(active === "email" ? null : "email")
            }
          >
            <div className="project-top">
              <div>
                <h4>🔐 Email Spam Classifier</h4>
                <p>ML Security Module</p>
              </div>

              <span>Python</span>
            </div>

            {active === "email" && (
              <div className="project-expanded">
                <p>
                  Machine learning system that detects spam emails
                  using NLP techniques.
                </p>

                <div className="tags">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>NLP</span>
                </div>
              </div>
            )}
          </div>

          {/* PROJECT */}
          <div
            className="project-card cyan"
            onClick={() =>
              setActive(active === "food" ? null : "food")
            }
          >
            <div className="project-top">
              <div>
                <h4>🍔 Food Delivery App</h4>
                <p>Full-stack System</p>
              </div>

              <span>React</span>
            </div>

            {active === "food" && (
              <div className="project-expanded">
                <p>
                  Food ordering platform with backend integration.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>Node</span>
                  <span>MySQL</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}