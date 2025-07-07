"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const bridgeRef = useRef<SVGPathElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animação do título e texto
      gsap.from(".problem-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animação da ponte (line drawing)
      if (bridgeRef.current) {
        const pathLength = bridgeRef.current.getTotalLength()

        gsap.set(bridgeRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(bridgeRef.current, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            createParticles()
          },
        })
      }
    }, sectionRef)

    const createParticles = () => {
      if (!particlesRef.current) return

      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div")
        particle.className = "absolute w-2 h-2 rounded-full"
        particle.style.background = i % 2 === 0 ? "#22C55E" : "#FACC15"
        particle.style.left = "50%"
        particle.style.top = "50%"

        particlesRef.current.appendChild(particle)

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          opacity: 0,
          scale: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: i * 0.1,
          onComplete: () => particle.remove(),
        })
      }
    }

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white" id="problema">
      <BackgroundEffects variant="section" intensity="low" />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTitle className="problem-content">Chega de se formar para o desemprego.</SectionTitle>

          <div className="problem-content mb-8">
            <h3 className="text-2xl font-bold text-[#6699FF] mb-6">O Cenário Atual</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto">
              Não aceitamos um sistema onde designers viram balconistas e engenheiros viram motoristas de aplicativo. A
              grande desconexão entre escola e mercado de trabalho é uma injustiça que a Beeedu veio resolver.
            </p>
          </div>

          <div className="problem-content mb-12" id="solucao">
            <h3 className="text-2xl font-bold text-[#22C55E] mb-6">A Missão Beeedu</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              <strong>"Formar para empregar. Ensinar para transformar. Conectar para prosperar."</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              A Beeedu integra educação, prática profissional e empregabilidade em um único ecossistema vivo. Uma
              plataforma com alma de colmeia: <strong>colaborativa, viva e justa</strong>.
            </p>
          </div>

          {/* Ponte SVG com partículas */}
          <div className="flex items-center justify-center gap-8 md:gap-16 relative">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[#6699FF] to-[#5588EE] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9L12 15L21 12V17H23V10L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[#2F4A60]">Escola</span>
            </div>

            <div className="relative">
              <svg width="250" height="80" className="hidden md:block">
                <defs>
                  <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6699FF" />
                    <stop offset="50%" stopColor="#5588EE" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>
                <path
                  ref={bridgeRef}
                  d="M 20 40 Q 125 15 230 40"
                  stroke="url(#bridgeGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[#2F4A60]">Mercado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
