import { useState } from "react"

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div style={{ background: "#050507", minHeight: "100vh", color: "white", padding: "40px", fontFamily: "monospace" }}>

      <h1 style={{ fontSize: "40px", color: "#a78bfa" }}>
        Hikma Ibrahim
      </h1>

      <h2 style={{ fontSize: "24px", color: "#22d3ee", marginBottom: "20px" }}>
        VeilStack
      </h2>

      <p style={{ color: "#888", marginBottom: "40px" }}>
        Developer • Cybersecurity • Embedded Systems • Web
      </p>

      <h3 style={{ color: "#a78bfa", marginBottom: "10px" }}>
        / system_modules
      </h3>

      {/* PROJECT */}
      <div
        onClick={() => setActive(active === "email" ? null : "email")}
        style={{
          border: "1px solid #444",
          padding: "15px",
          marginBottom: "10px",
          cursor: "pointer"
        }}
      >
        Email Spam Classifier

        {active === "email" && (
          <div style={{ marginTop: "10px", color: "#ccc" }}>
            ML-based spam detection system.
          </div>
        )}
      </div>

    </div>
  )
}