"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D] pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Image
                src="/images/LogotipoClaraAdvocacia.png"
                alt="Clara Advocacia"
                width={200}
                height={120}
                className="h-16 w-auto mb-6"
              />
              <p className="text-stone-200/70 leading-relaxed max-w-md">
                Mais de 15 anos oferecendo soluções jurídicas estratégicas e personalizadas. Seu sucesso é nossa
                prioridade.
              </p>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-br from-stone-400/20 to-rose-300/20 rounded-lg flex items-center justify-center border border-stone-200/20 hover:border-stone-400/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-stone-400" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-stone-200 mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#home" },
                { label: "Sobre", href: "#about" },
                { label: "Serviços", href: "#services" },
                { label: "Contato", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-stone-200/70 hover:text-stone-400 transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-stone-200 mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-stone-200/80">(11) 9999-9999</p>
                  <p className="text-stone-200/60 text-sm">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-stone-200/80">contato@claraadvocacia.com.br</p>
                  <p className="text-stone-200/60 text-sm">Resposta em até 2h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-stone-200/80">Av. Paulista, 1000</p>
                  <p className="text-stone-200/60 text-sm">São Paulo/SP</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-stone-200/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-stone-200/60 text-sm mb-4 md:mb-0">
            © 2024 Clara Advocacia. Todos os direitos reservados.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gradient-to-r from-stone-400 to-rose-300 rounded-full flex items-center justify-center text-black hover:shadow-lg hover:shadow-stone-400/25 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
