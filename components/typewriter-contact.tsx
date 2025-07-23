"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterContactProps {
  className?: string
}

export function TypewriterContact({ className }: TypewriterContactProps) {
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)

  const phrases = ["Você merece saber seus direitos.", "Justiça começa com informação."]

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentPhrase.length) {
            setCurrentText(currentPhrase.slice(0, currentText.length + 1))
          } else {
            // Wait 4 seconds before starting to delete
            setTimeout(() => setIsDeleting(true), 4000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, phraseIndex])

  return (
    <div className={className}>
      <span style={{ color: "#F2A6B3" }}>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-1 h-16 bg-[#F2A6B3] ml-2"
      />
    </div>
  )
}
