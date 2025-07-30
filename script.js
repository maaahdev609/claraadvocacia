// Clara Advocacia Website - JavaScript Puro
;(() => {
  // Configurações
  const CONFIG = {
    typewriterSpeed: 100,
    typewriterDelay: 50,
    scrollThreshold: 0.1,
    particleCount: 30,
    loadingMinTime: 1500,
  }

  // Estado global
  let isLoaded = false
  let animationFrame

  // Elementos DOM
  const elements = {
    loadingScreen: null,
    scrollProgress: null,
    particlesCanvas: null,
    typewriterText: null,
    typewriterContact: null,
    scrollToTop: null,
  }

  // Classe para efeito de máquina de escrever
  class TypewriterEffect {
    constructor(element, words, options = {}) {
      this.element = element
      this.words = words
      this.speed = options.speed || CONFIG.typewriterSpeed
      this.deleteSpeed = options.deleteSpeed || CONFIG.typewriterDelay
      this.delay = options.delay || 1000
      this.currentWordIndex = 0
      this.currentText = ""
      this.isDeleting = false
      this.isRunning = false
    }

    start() {
      if (this.isRunning) return
      this.isRunning = true
      this.type()
    }

    stop() {
      this.isRunning = false
    }

    type() {
      if (!this.isRunning) return

      const currentWord = this.words[this.currentWordIndex]

      if (!this.isDeleting) {
        if (this.currentText.length < currentWord.length) {
          this.currentText = currentWord.slice(0, this.currentText.length + 1)
          this.element.textContent = this.currentText
          setTimeout(() => this.type(), this.speed)
        } else {
          setTimeout(() => {
            this.isDeleting = true
            this.type()
          }, this.delay)
        }
      } else {
        if (this.currentText.length > 0) {
          this.currentText = this.currentText.slice(0, -1)
          this.element.textContent = this.currentText
          setTimeout(() => this.type(), this.deleteSpeed)
        } else {
          this.isDeleting = false
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length
          setTimeout(() => this.type(), this.speed)
        }
      }
    }
  }

  // Sistema de partículas
  class ParticleSystem {
    constructor(canvas) {
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.particles = []
      this.resize()
      this.init()
    }

    resize() {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    }

    init() {
      this.particles = []
      for (let i = 0; i < CONFIG.particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          color: Math.random() > 0.5 ? "#d4af37" : "#F2A6B3",
        })
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1

        this.ctx.beginPath()
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        this.ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        this.ctx.fill()
      })

      animationFrame = requestAnimationFrame(() => this.animate())
    }

    start() {
      this.animate()
    }

    stop() {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }

  // Intersection Observer para animações
  const observerOptions = {
    threshold: CONFIG.scrollThreshold,
    rootMargin: "-50px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")

        // Tratamento especial para lista de missão
        if (entry.target.classList.contains("mission-list")) {
          const items = entry.target.querySelectorAll("li")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate")
            }, index * 100)
          })
        }

        // Tratamento especial para itens de contato
        if (entry.target.classList.contains("contact-items")) {
          const items = entry.target.querySelectorAll(".contact-item")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate")
            }, index * 150)
          })
        }
      }
    })
  }, observerOptions)

  // Função de scroll suave
  function smoothScrollTo(target) {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Atualizar progresso do scroll
  function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / scrollHeight) * 100

    if (elements.scrollProgress) {
      elements.scrollProgress.style.width = Math.min(progress, 100) + "%"
    }
  }

  // Mostrar/ocultar botão de voltar ao topo
  function toggleScrollToTop() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (elements.scrollToTop) {
      if (scrollTop > 300) {
        elements.scrollToTop.style.opacity = "1"
        elements.scrollToTop.style.visibility = "visible"
      } else {
        elements.scrollToTop.style.opacity = "0"
        elements.scrollToTop.style.visibility = "hidden"
      }
    }
  }

  // Inicializar tela de carregamento
  function initLoadingScreen() {
    const startTime = Date.now()

    function hideLoading() {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, CONFIG.loadingMinTime - elapsed)

      setTimeout(() => {
        if (elements.loadingScreen) {
          elements.loadingScreen.classList.add("hidden")
          setTimeout(() => {
            elements.loadingScreen.style.display = "none"
            isLoaded = true
            initTypewriters()
            initParticles()
          }, 500)
        }
      }, remainingTime)
    }

    if (document.readyState === "complete") {
      hideLoading()
    } else {
      window.addEventListener("load", hideLoading)
    }
  }

  // Inicializar efeitos de máquina de escrever
  function initTypewriters() {
    // Typewriter do hero
    if (elements.typewriterText) {
      const heroWords = ["Justiça não se busca com sorte."]
      const heroTypewriter = new TypewriterEffect(elements.typewriterText, heroWords, {
        speed: 80,
        deleteSpeed: 40,
        delay: 2000,
      })

      setTimeout(() => {
        heroTypewriter.start()
      }, 1000)
    }

    // Typewriter do contato
    if (elements.typewriterContact) {
      const contactWords = ["Você merece saber seus direitos.", "Justiça começa com informação."]
      const contactTypewriter = new TypewriterEffect(elements.typewriterContact, contactWords, {
        speed: 100,
        deleteSpeed: 50,
        delay: 4000,
      })

      // Iniciar quando a seção de contato estiver visível
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const contactObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                contactTypewriter.start()
                contactObserver.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.3 },
        )

        contactObserver.observe(contactSection)
      }
    }
  }

  // Inicializar partículas
  function initParticles() {
    if (elements.particlesCanvas) {
      const particleSystem = new ParticleSystem(elements.particlesCanvas)
      particleSystem.start()

      // Lidar com redimensionamento
      window.addEventListener("resize", () => {
        particleSystem.resize()
        particleSystem.init()
      })
    }
  }

  // Inicializar animações de scroll
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      ".stat-card, .mission-card, .service-card, .services-cta, .mission-list, .contact-items",
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  }

  // Inicializar navegação
  function initNavigation() {
    // Scroll suave para links âncora
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (link) {
        e.preventDefault()
        const target = link.getAttribute("href")
        if (target && target !== "#") {
          smoothScrollTo(target)
        }
      }
    })

    // Botão de voltar ao topo
    if (elements.scrollToTop) {
      elements.scrollToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }

    // Substituir links de WhatsApp pelo novo número
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')
    whatsappLinks.forEach((link) => {
      link.href = "https://wa.me/5517997926061"
    })
  }

  // Inicializar eventos de scroll
  function initScrollEvents() {
    let ticking = false

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          toggleScrollToTop()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
  }

  // Inicializar todos os componentes
  function init() {
    // Cache dos elementos DOM
    elements.loadingScreen = document.getElementById("loading-screen")
    elements.scrollProgress = document.getElementById("scroll-progress")
    elements.particlesCanvas = document.getElementById("particles-canvas")
    elements.typewriterText = document.getElementById("typewriter-text")
    elements.typewriterContact = document.getElementById("typewriter-contact")
    elements.scrollToTop = document.getElementById("scroll-to-top")

    // Inicializar componentes
    initLoadingScreen()
    initScrollAnimations()
    initNavigation()
    initScrollEvents()

    // Tratamento de erros
    window.addEventListener("error", (e) => {
      console.warn("Erro não crítico:", e.error)
    })

    // Lidar com mudança de visibilidade
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        // Pausar animações quando a aba não está visível
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      } else {
        // Retomar animações quando a aba fica visível
        if (isLoaded && elements.particlesCanvas) {
          initParticles()
        }
      }
    })
  }

  // Iniciar quando o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
  } else {
    init()
  }

  // API pública para debug
  window.ClaraAdvocacia = {
    version: "1.0.0",
    config: CONFIG,
    elements: elements,
    smoothScrollTo: smoothScrollTo,
  }
})()
