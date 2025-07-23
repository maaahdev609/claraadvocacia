"use client"

import { motion } from "framer-motion"

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-stone-400/10 to-rose-300/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-400/10 to-stone-300/10 rounded-full blur-3xl"
      />
    </div>
  )
}
