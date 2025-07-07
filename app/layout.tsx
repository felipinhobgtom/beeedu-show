import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Beeedu - Formar para empregar. Ensinar para transformar.",
  description:
    "A Beeedu é a plataforma inovadora que conecta estudantes da rede pública ao mercado de trabalho de forma prática, escalável e sustentável.",
  keywords: "educação, emprego, estudantes, mercado de trabalho, cursos profissionalizantes",
  authors: [{ name: "Beeedu" }],
  openGraph: {
    title: "Beeedu - Formar para empregar. Ensinar para transformar.",
    description:
      "A Beeedu é a plataforma inovadora que conecta estudantes da rede pública ao mercado de trabalho de forma prática, escalável e sustentável.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
