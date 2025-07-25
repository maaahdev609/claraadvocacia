"use client"

import dynamic from "next/dynamic"

// Dynamically import components that use window/document
const ScrollIndicator = dynamic(
  () => import("@/components/scroll-indicator").then((mod) => ({ default: mod.ScrollIndicator })),
  {
    ssr: false,
  },
)

const Particles = dynamic(() => import("@/components/particles").then((mod) => ({ default: mod.Particles })), {
  ssr: false,
})

export function ClientComponents() {
  return (
    <>
      <ScrollIndicator />
      <Particles />
    </>
  )
}
