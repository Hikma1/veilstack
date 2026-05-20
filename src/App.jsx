import { useEffect, useState } from "react"
import "./index.css"

export default function App() {
  const [active, setActive] = useState(null)
useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")