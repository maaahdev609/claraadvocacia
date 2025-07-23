"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className, cursorClassName }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.text.length) {
            setCurrentText(word.text.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={className}>
      <span className={words[currentWordIndex]?.className}>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className={`inline-block w-1 h-12 bg-stone-400 ml-1 ${cursorClassName}`}
      />
    </div>
  )
}
