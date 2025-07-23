"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Scale, Award, Users, Clock } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Scale, value: "500+", label: "Casos Vencidos" },
    { icon: Award, value: "15+", label: "Anos de Experiência" },
    { icon: Users, value: "1000+", label: "Clientes Satisfeitos" },
    { icon: Clock, value: "24/7", label: "Suporte Disponível" },
  ]

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase mb-4 block">
            Sobre Clara Advocacia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-200 mb-6">
            Excelência em{" "}
            <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent">Advocacia</span>
          </h2>
          <p className="text-xl text-stone-200/80 max-w-3xl mx-auto leading-relaxed">
            Fundado com o compromisso de oferecer soluções jurídicas inovadoras e personalizadas, nosso escritório
            combina tradição, experiência e tecnologia para garantir os melhores resultados.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-stone-400/20 to-rose-300/20 rounded-2xl flex items-center justify-center border border-stone-200/20 group-hover:border-stone-400/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-stone-400" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-stone-200/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-stone-200/5 to-rose-200/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-stone-200/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-stone-200 mb-6">
                Nossa{" "}
                <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent">
                  Missão
                </span>
              </h3>
              <p className="text-lg text-stone-200/80 leading-relaxed mb-6">
                Proporcionar assessoria jurídica de excelência, construindo relacionamentos duradouros baseados na
                confiança, transparência e resultados efetivos.
              </p>
              <ul className="space-y-3">
                {[
                  "Atendimento personalizado e humanizado",
                  "Estratégias jurídicas inovadoras",
                  "Transparência em todos os processos",
                  "Compromisso com resultados excepcionais",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center text-stone-200/70"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-stone-400 to-rose-300 rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-stone-400/20 to-rose-300/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-stone-200/10 to-rose-200/10 rounded-2xl p-8 border border-stone-200/20">
                <Scale className="w-16 h-16 text-stone-400 mb-6" />
                <h4 className="text-2xl font-bold text-stone-200 mb-4">Valores Fundamentais</h4>
                <p className="text-stone-200/70 leading-relaxed">
                  Ética, integridade e excelência são os pilares que sustentam cada decisão e ação em nosso escritório,
                  garantindo sempre o melhor para nossos clientes.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
