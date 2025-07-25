"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, Home, Users, Building, FileText, Shield, ArrowRight, CheckCircle } from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.1,
  })
  const [activeService, setActiveService] = useState(0)

  // Nova cor rosa claro para todos os títulos e ícones
  const lightPinkColor = "#F2A6B3"

  const services = [
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Consultoria completa para empresas de todos os portes",
      features: ["Constituição de empresas", "Contratos comerciais", "Compliance corporativo", "Fusões e aquisições"],
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Segurança jurídica em transações imobiliárias",
      features: ["Compra e venda de imóveis", "Regularização fundiária", "Contratos de locação", "Usucapião"],
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Acompanhamento sensível em questões familiares",
      features: ["Divórcio consensual", "Guarda de menores", "Pensão alimentícia", "Inventário e partilha"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Building,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas e previdenciários",
      features: ["Ações trabalhistas", "Rescisões contratuais", "Benefícios previdenciários", "Assédio moral"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FileText,
      title: "Direito Civil",
      description: "Soluções para questões do dia a dia",
      features: ["Responsabilidade civil", "Contratos em geral", "Danos morais", "Direito do consumidor"],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Shield,
      title: "Direito Criminal",
      description: "Defesa criminal especializada e estratégica",
      features: ["Defesa criminal", "Habeas corpus", "Recursos criminais", "Crimes econômicos"],
      color: "from-red-500 to-rose-600",
    },
  ]

  return (
    <section id="services" ref={ref} className="spacing-responsive-xl relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D]" />

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-20"
        >
          <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent text-responsive-sm font-medium tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-responsive-4xl font-bold text-stone-200 mb-4 lg:mb-6">
            Áreas de{" "}
            <span className="bg-gradient-to-r from-stone-400 to-rose-300 bg-clip-text text-transparent">Atuação</span>
          </h2>
          <p className="text-responsive-lg text-stone-200/80 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções jurídicas completas e especializadas para atender todas as suas necessidades legais com
            excelência e dedicação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid-responsive mb-8 lg:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              onHoverStart={() => setActiveService(index)}
              className={`service-card group ${index >= 3 ? "service-card-bottom" : ""}`}
              tabIndex={0}
              role="button"
              aria-label={`Saiba mais sobre ${service.title}`}
            >
              <div className="bg-gradient-to-br from-stone-200/5 to-rose-200/5 backdrop-blur-sm rounded-3xl spacing-responsive-lg border border-stone-200/10 transition-all duration-300 h-full">
                <motion.div
                  className="service-icon w-12 h-12 lg:w-16 lg:h-16 mb-4 lg:mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300"
                  style={{
                    backgroundColor: "rgba(242, 166, 179, 0.08)",
                    boxShadow: "0 0 15px rgba(242, 166, 179, 0.2)",
                    opacity: 0.9,
                  }}
                >
                  <service.icon className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: lightPinkColor }} />
                </motion.div>

                <h3
                  className="service-title text-responsive-xl font-bold mb-3 lg:mb-4 transition-colors duration-300"
                  style={{
                    color: lightPinkColor,
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {service.title}
                </h3>

                <p className="text-responsive-base text-stone-200/80 mb-4 lg:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + featureIndex * 0.1,
                        ease: "easeOut",
                      }}
                      className="flex items-center text-responsive-sm text-stone-200/70"
                    >
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-400 mr-2 lg:mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="https://wa.me/5517996492656"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center text-responsive-sm text-stone-300 font-medium group-hover:text-stone-200 transition-colors duration-300"
                >
                  Saiba mais
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-stone-400/10 to-rose-300/10 backdrop-blur-sm rounded-3xl spacing-responsive-lg border border-stone-200/20">
            <h3 className="text-responsive-3xl font-bold text-stone-200 mb-4 lg:mb-6">Precisa de Ajuda Jurídica?</h3>
            <p className="text-responsive-lg text-stone-200/80 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para analisar seu caso e oferecer a melhor estratégia jurídica.
            </p>
            <motion.button
              whileHover={{
                scale: 1.02,
                filter: "brightness(1.1)",
                boxShadow: "0 20px 40px rgba(212, 154, 154, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="button-responsive bg-gradient-to-r from-[#D49A9A] to-[#2B2B2B] text-white font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Agendar Consulta Gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
