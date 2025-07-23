"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-400 to-rose-300 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
