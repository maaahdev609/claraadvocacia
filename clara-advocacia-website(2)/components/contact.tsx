"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { TypewriterContact } from "./typewriter-contact"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9999-9999",
      subInfo: "WhatsApp disponível",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@claraadvocacia.com.br",
      subInfo: "Resposta em até 2h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo/SP",
      subInfo: "Próximo ao metrô",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda à Sexta: 8h às 18h",
      subInfo: "Sábado: 8h às 12h",
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase mb-4 block">
            Entre em Contato
          </span>
          <div className="mb-6">
            <TypewriterContact className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex justify-center items-center min-h-[80px]" />
          </div>
          <p className="text-xl text-stone-200/80 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ouvir seu caso e oferecer a melhor solução jurídica. Entre em contato conosco e agende
            sua consulta gratuita.
          </p>
        </motion.div>

        {/* Main Content - Two Blocks Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Logo Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center lg:flex-1 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Animated background effect */}

              {/* Clean Logo - No padding, no border */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/images/LogotipoClaraAdvocacia.png"
                  alt="Clara Advocacia Logo"
                  width={400}
                  height={600}
                  className="w-full h-auto max-w-[200px] md:max-w-[280px] lg:max-w-[280px] object-contain"
                  priority
                />
              </motion.div>

              {/* Floating particles around logo */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-2 right-2 w-2 h-2 bg-[#F2A6B3] rounded-full"
              />

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 left-2 w-1.5 h-1.5 bg-stone-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Contact Information Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center lg:flex-1 order-1 lg:order-2"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-200 mb-6">Informações de Contato</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 group justify-center lg:justify-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gradient-to-br from-stone-400/20 to-rose-300/20 rounded-xl flex items-center justify-center border border-stone-200/20 group-hover:border-stone-400/50 transition-all duration-300 flex-shrink-0"
                    >
                      <item.icon className="w-6 h-6 text-stone-400" />
                    </motion.div>
                    <div className="text-center lg:text-left">
                      <h4 className="text-lg font-semibold text-stone-200 mb-1">{item.title}</h4>
                      <p className="text-stone-200/80 font-medium">{item.info}</p>
                      <p className="text-stone-200/60 text-sm">{item.subInfo}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
