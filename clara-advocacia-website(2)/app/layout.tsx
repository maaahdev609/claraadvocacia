import type React from "react"
import type { Metadata } from "next"
import { playfairDisplay } from "../styles/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clara Advocacia - Excelência Jurídica",
  description:
    "Mais de uma década defendendo seus direitos com estratégias jurídicas personalizadas e resultados excepcionais.",
  other: {
    "Content-Security-Policy":
      "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self';",
    referrer: "no-referrer",
    robots: "noindex, nofollow",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={playfairDisplay.variable}>
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  )
}
