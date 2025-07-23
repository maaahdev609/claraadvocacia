import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { BackgroundEffects } from "@/components/background-effects"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="relative">
      <BackgroundEffects />
      <ScrollIndicator />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
