"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import EcosystemCard from "./ui/ecosystem-card"
import BackgroundEffects from "./background-effects"

const ecosystemData = [
  {
    title: "Aprenda",
    icon: "book",
    description:
      "Cursos profissionalizantes e trilhas formativas de alto impacto, criados em parceria com empresas reais do mercado.",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Aplique",
    icon: "tool",
    description:
      "Freelas e projetos remunerados (a partir de R$ 25) que proporcionam renda e experiência imediata desde o início dos estudos.",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Evolua",
    icon: "trophy",
    description:
      "Sistema de gamificação com pontos, níveis e insígnias temáticas. Certificados com validação real do mercado de trabalho.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Seja Reconhecido",
    icon: "rocket",
    description:
      "Receba ofertas reais de trabalho através do nosso sistema exclusivo de Job Drafts. Empresas te descobrem pelo seu mérito.",
    color: "from-purple-500 to-purple-600",
  },
]

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".ecosystem-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Cards animation with proper visibility
      gsap.fromTo(
        ".ecosystem-card",
        {
          y: 40,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-white relative z-10 overflow-hidden" id="como-funciona">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section - Optimized */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#6699FF]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6699FF] text-sm font-semibold">🐝 O que é a Beeedu?</span>
          </div>
          <p className="text-base text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            <strong>"Bee"</strong> (comunidade) + <strong>"Edu"</strong> (educação) + referência ao{" "}
            <strong>"bidu"</strong> (esperto). Uma plataforma digital que conecta estudantes ao mercado de trabalho,
            recompensando o mérito e criando um ecossistema colaborativo, vivo e justo.
          </p>
        </div>

        <SectionTitle className="ecosystem-title mb-8">Como Funciona: A Jornada do Estudante</SectionTitle>

        {/* Cards Grid - Enhanced */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ecosystemData.map((item, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < ecosystemData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#6699FF]/50 to-transparent z-0"></div>
              )}

              <EcosystemCard
                title={item.title}
                icon={item.icon}
                description={item.description}
                color={item.color}
                className="ecosystem-card relative z-10"
              />

              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#6699FF] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-[#6699FF]/5 to-[#22C55E]/5 rounded-xl p-6 border border-[#6699FF]/10 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#2F4A60] mb-4">🎯 Resultados Comprovados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "89%", label: "Taxa de conclusão" },
                { value: "4.8★", label: "Avaliação média" },
                { value: "R$ 3.2k", label: "Salário médio" },
                { value: "47+", label: "Empresas parceiras" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-[#6699FF] mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
