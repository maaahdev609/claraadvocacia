import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { BackgroundEffects } from "@/components/background-effects"
import { ClientComponents } from "@/components/client-components"

export default function Home() {
  return (
    <main className="relative">
      <BackgroundEffects />
      <ClientComponents />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
