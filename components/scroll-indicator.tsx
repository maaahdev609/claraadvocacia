"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const updateScrollProgress = () => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        const scrollPx = document.documentElement.scrollTop
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = scrollPx / winHeightPx

        setScrollProgress(scrolled)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateScrollProgress)
      return () => window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [isClient])

  if (!isClient) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-400 to-rose-300 z-50 origin-left"
      style={{
        transform: `scaleX(${scrollProgress})`,
      }}
    />
  )
}
