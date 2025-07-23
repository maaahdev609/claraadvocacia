"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { TypewriterEffect } from "./typewriter-effect"

import dynamic from "next/dynamic"
const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false })

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/80 z-10" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center min-h-screen py-8">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero-text-container space-y-6 lg:space-y-8 flex flex-col justify-center h-full"
              style={{ transform: "translateY(-5%)" }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase">
                    Excelência Jurídica
                  </span>
                </motion.div>

                {/* Unified Phrase Container */}
                <div className="unified-phrase">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-200 leading-tight">
                    {/* Typewriter Effect Line */}
                    <div className="typewriter-line">
                      <TypewriterEffect
                        words={[
                          { text: "Justiça", className: "text-inherit" },
                          { text: "não", className: "text-inherit" },
                          { text: "se", className: "text-inherit" },
                          { text: "busca", className: "text-inherit" },
                          { text: "com", className: "text-inherit" },
                          { text: "sorte.", className: "text-rose-200" },
                        ]}
                      />
                    </div>

                    {/* Static Line */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                      className="static-line mt-2"
                    >
                      <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent">
                        Se conquista com estratégia.
                      </span>
                    </motion.div>
                  </h1>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="text-lg sm:text-xl text-stone-200/80 leading-relaxed max-w-2xl"
              >
                Mais de uma década defendendo seus direitos com estratégias jurídicas personalizadas e resultados
                excepcionais.
              </motion.p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-stone-400/20 to-rose-300/20 rounded-full blur-xl"
                />

                <div className="relative bg-gradient-to-br from-stone-200/10 to-rose-200/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-stone-200/20">
                  <Image
                    src="/images/ClaraAd.png"
                    alt="Advogada Clara"
                    width={500}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-stone-200/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-stone-200 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
