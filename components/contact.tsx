"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { TypewriterContact } from "./typewriter-contact"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.2,
  })

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
      className="contact-section-responsive relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D]" />

      <div className="container-responsive relative z-10">
        {/* Header with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-12"
        >
          <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent text-responsive-sm font-medium tracking-wider uppercase mb-4 block">
            Entre em Contato
          </span>
          <div className="mb-4 lg:mb-6">
            <TypewriterContact className="text-responsive-4xl font-bold leading-tight flex justify-center items-center min-h-[60px] lg:min-h-[80px]" />
          </div>
          <p className="text-responsive-xl text-stone-200/80 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ouvir seu caso e oferecer a melhor solução jurídica. Entre em contato conosco e agende
            sua consulta gratuita.
          </p>
        </motion.div>

        {/* Main Content - Two Blocks Side by Side */}
        <div className="contact-grid grid items-center justify-center max-w-6xl mx-auto">
          {/* Logo Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Clean Logo - No padding, no border */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="contact-logo-wrapper">
                  <Image
                    src="/images/LogotipoClaraAdvocacia.png"
                    alt="Clara Advocacia Logo"
                    width={400}
                    height={600}
                    className="contact-logo-optimized"
                    priority
                    quality={95}
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 250px, 320px"
                  />
                </div>
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
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-responsive-3xl font-bold text-stone-200 mb-4 lg:mb-6">Informações de Contato</h3>

              <div className="space-y-3 lg:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3 lg:gap-4 group justify-center lg:justify-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-stone-400/20 to-rose-300/20 rounded-xl flex items-center justify-center border border-stone-200/20 group-hover:border-stone-400/50 transition-all duration-300 flex-shrink-0"
                    >
                      <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-stone-400" />
                    </motion.div>
                    <div className="text-center lg:text-left">
                      <h4 className="text-responsive-lg font-semibold text-stone-200 mb-1">{item.title}</h4>
                      <p className="text-responsive-base text-stone-200/80 font-medium">{item.info}</p>
                      <p className="text-responsive-sm text-stone-200/60">{item.subInfo}</p>
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
