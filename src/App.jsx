import { useEffect, useState } from "react"
import "./index.css"

export default function App() {
  const [active, setActive] = useState(null)
useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
     const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top

        if (elementTop < windowHeight - 100) {
          el.classList.add("active")
        }
      })
 window.addEventListener("scroll", revealOnScroll)

    revealOnScroll()

    return () =>
      window.removeEventListener("scroll", revealOnScroll)
  }, [])
   return (
    <div className="app">

      {/* GRID BACKGROUND */}
      <div className="grid-bg"></div>

      {/* GLOW EFFECTS */}
      <div className="purple-glow"></div>
      <div className="cyan-glow"></div>

      {/* MAIN CONTENT */}
      <div className="content">

        {/* HERO */}
        <div className="hero reveal">

          <div className="hero-line"></div>

          <h1>
            Hikma Ibrahim
          </h1>

          <h2>
            VeilStack
          </h2>

          <p>
            Developer • Cybersecurity • Embedded Systems • Web
          </p>

        </div>

        {/* TERMINAL */}
        <div className="terminal reveal">

          <div className="terminal-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
{`> whoami

Hikma Ibrahim
VeilStack

Building secure and meaningful technology.

Cybersecurity • Embedded Systems • Web Development`}
          </pre>

        </div>

        {/* ABOUT */}
        <div className="about reveal">

          <h3>/ initializing_profile</h3>

          <div className="about-box">

            <p>
              Passionate Computer Science student focused on
              building secure and meaningful systems.
            </p>

            <p>
              Exploring cybersecurity, embedded systems,
              full-stack development, and immersive digital experiences.
            </p>

            <div className="about-tags">
              <span>Cybersecurity</span>
              <span>Embedded Systems</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
            </div>

          </div>
        </div>

        {/* PROJECTS */}
        <div className="projects reveal">

          <h3>/ system_modules</h3>

          {/* PROJECT 1 */}
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
                  Machine learning system that detects spam
                  emails using NLP techniques.
                </p>

                <div className="tags">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>NLP</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/Hikma1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            )}
          </div>

          {/* PROJECT 2 */}
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

                <div className="project-links">
                  <a
                    href="https://github.com/Hikma1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            )}
          </div>

          {/* PROJECT 3 */}
          <div
            className="project-card fuchsia"
            onClick={() =>
              setActive(active === "voice" ? null : "voice")
            }
          >

            <div className="project-top">

              <div>
                <h4>🎤 Voice Note Taker</h4>
                <p>AI Interface</p>
              </div>

              <span>JavaScript</span>

            </div>

            {active === "voice" && (
              <div className="project-expanded">

                <p>
                  Converts voice recordings into structured notes.
                </p>

                <div className="tags">
                  <span>JavaScript</span>
                  <span>Speech API</span>
                  <span>AI</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/Hikma1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            )}
          </div>

          {/* PROJECT 4 */}
          <div
            className="project-card yellow"
            onClick={() =>
              setActive(active === "password" ? null : "password")
            }
          >

            <div className="project-top">

              <div>
                <h4>🔑 Password Analyzer</h4>
                <p>Security Tool</p>
              </div>

              <span>Security</span>

            </div>

            {active === "password" && (
              <div className="project-expanded">

                <p>
                  Evaluates password strength and vulnerability risks.
                </p>

                <div className="tags">
                  <span>Security</span>
                  <span>JavaScript</span>
                  <span>Algorithms</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/Hikma1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* CONTACT TERMINAL */}
        <div className="contact-terminal reveal">

          <h3>/ secure_uplink</h3>

          <div className="terminal-window">

            <p className="command">
              $ connect --hikma
            </p>

            <div className="links">

              <a
                href="https://github.com/Hikma1"
                target="_blank"
                rel="noopener noreferrer"
              >
                [✓] GitHub uplink established
              </a>

              <a
                href="https://www.linkedin.com/in/hikma-ibrahim-ahmed-5777ab32b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                [✓] LinkedIn network connected
              </a>

              <a
                href="https://t.me/hiib_ah"
                target="_blank"
                rel="noopener noreferrer"
              >
                [✓] Telegram secure channel active
              </a>

              <a href="mailto:hikma0227@gmail.com">
                [✓] Direct communication initialized
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}