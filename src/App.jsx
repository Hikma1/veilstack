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