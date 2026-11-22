import { useEffect, useRef, useState } from 'react'

export default function Timeline({ items }) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
