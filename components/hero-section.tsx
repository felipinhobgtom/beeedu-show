"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Button from "./ui/button"
import BackgroundEffects from "./background-effects"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1 })

      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          buttonsRef.current?.children || [],
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-white pt-20"
      id="inicio"
    >
      <BackgroundEffects variant="hero" intensity="low" />

      <div className="container mx-auto px-4 text-center z-20 max-w-6xl relative">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight font-poppins"
        >
          Formar para empregar. <span className="text-[#6699FF] relative">Ensinar para transformar.</span> Conectar para
          prosperar.
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          A Beeedu é a plataforma inovadora que conecta estudantes da rede pública ao mercado de trabalho de forma
          prática, escalável e sustentável. Uma ponte viva entre aprendizado, trabalho e renda.
        </p>
      </div>
    </section>
  )
}
