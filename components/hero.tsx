"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { TypewriterEffect } from "./typewriter-effect"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section id="home" ref={containerRef} className="hero-section-responsive relative overflow-hidden bg-[#0D0D0D]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/80 z-10" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 w-full">
        <div className="container-responsive">
          <div className="hero-content-responsive">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero-text-container space-y-4 lg:space-y-8 flex flex-col justify-center h-full order-2 lg:order-1"
              style={{ transform: "translateY(-5%)" }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent text-responsive-sm font-medium tracking-wider uppercase">
                    Excelência Jurídica
                  </span>
                </motion.div>

                {/* Unified Phrase Container */}
                <div className="unified-phrase">
                  <h1 className="font-bold text-stone-200 leading-tight">
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
                className="text-responsive-lg text-stone-200/80 leading-relaxed max-w-2xl"
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
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="image-container-responsive">
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

                <div className="relative bg-gradient-to-br from-stone-200/10 to-rose-200/10 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-stone-200/20">
                  <div className="hero-image-wrapper">
                    <Image
                      src="/images/ClaraAd.png"
                      alt="Advogada Clara"
                      width={500}
                      height={600}
                      className="hero-image-optimized"
                      priority
                      quality={95}
                      sizes="(max-width: 479px) 200px, (max-width: 639px) 260px, (max-width: 767px) 300px, (max-width: 1023px) 350px, 500px"
                    />
                  </div>
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
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-4 h-8 lg:w-6 lg:h-10 border-2 border-stone-200/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-0.5 h-2 lg:w-1 lg:h-3 bg-stone-200 rounded-full mt-1 lg:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
