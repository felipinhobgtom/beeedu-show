"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import Button from "./ui/button"
import BackgroundEffects from "./background-effects"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const chartData = [
  {
    label: "Habilidades Técnicas",
    value: 85,
    color: "#6699FF",
    bgColor: "bg-[#6699FF]/10",
    textColor: "text-[#6699FF]",
  },
  {
    label: "Projetos Concluídos",
    value: 92,
    color: "#22C55E",
    bgColor: "bg-[#22C55E]/10",
    textColor: "text-[#22C55E]",
  },
  {
    label: "Avaliação Geral",
    value: 78,
    color: "#FACC15",
    bgColor: "bg-[#FACC15]/10",
    textColor: "text-[#FACC15]",
  },
]

export default function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<(HTMLDivElement | null)[]>([])
  const valuesRef = useRef<(HTMLSpanElement | null)[]>([])
  const isAnimatedRef = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(".companies-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // Chart animation function
      const animateChart = () => {
        if (isAnimatedRef.current) return
        isAnimatedRef.current = true

        chartData.forEach((item, index) => {
          const bar = barsRef.current[index]
          const valueElement = valuesRef.current[index]

          if (bar) {
            // Reset bar width
            gsap.set(bar, {
              width: "0%",
              transformOrigin: "left center",
            })

            // Animate bar width
            gsap.to(bar, {
              width: `${item.value}%`,
              duration: 2,
              delay: index * 0.3,
              ease: "power2.out",
            })
          }

          if (valueElement) {
            // Animate counter
            const obj = { value: 0 }
            gsap.to(obj, {
              value: item.value,
              duration: 2,
              delay: index * 0.3,
              ease: "power2.out",
              onUpdate: () => {
                valueElement.textContent = `${Math.round(obj.value)}%`
              },
            })
          }
        })

        // Animate labels
        gsap.from(".chart-label", {
          opacity: 0,
          x: -20,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        })
      }

      // Create ScrollTrigger for chart
      ScrollTrigger.create({
        trigger: chartRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
        onEnter: animateChart,
        onLeaveBack: () => {
          isAnimatedRef.current = false
          // Reset bars and values
          barsRef.current.forEach((bar) => {
            if (bar) gsap.set(bar, { width: "0%" })
          })
          valuesRef.current.forEach((value) => {
            if (value) value.textContent = "0%"
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-[#2F4A60]/5 to-[#6699FF]/5 relative overflow-hidden"
      id="empresas"
    >
      {/* Subtle honey-inspired background without blur */}
      <BackgroundEffects variant="section" intensity="medium" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle className="companies-content text-left">
                Onde o talento certo encontra a oportunidade certa.
              </SectionTitle>

              <p className="companies-content text-lg text-gray-600 mb-8 leading-relaxed">
                Pare de recrutar no escuro. Na Beeedu, você investe em talentos que já demonstraram seu potencial.
                Acompanhe a evolução dos alunos em tempo real, ofereça projetos, proponha freelas e contrate com dados e
                confiança.
              </p>

              <div className="companies-content mb-8">
                <h4 className="text-xl font-bold text-[#6699FF] mb-4">Proposta de Valor para Empresas:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#22C55E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Talentos qualificados com experiência prática comprovada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#22C55E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recrutamento assertivo baseado em performance real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#22C55E] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Investimento em capacitação com retorno garantido</span>
                  </li>
                </ul>
              </div>

              <Button variant="primary" size="large" className="companies-content group">
                <span className="relative z-10">Encontre talentos na Beeedu</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5588EE] to-[#6699FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Button>
            </div>

            <div
              ref={chartRef}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6699FF]/5 to-transparent"></div>

              <h3 className="text-xl font-semibold text-gray-900 mb-8 relative z-10">
                Progresso do Aluno em Tempo Real
              </h3>

              <div className="space-y-6 relative z-10">
                {chartData.map((item, index) => (
                  <div key={index} className="chart-item">
                    <div className="flex items-center justify-between mb-3">
                      <span className="chart-label text-sm font-medium text-gray-600">{item.label}</span>
                      <span
                        ref={(el) => {
                          valuesRef.current[index] = el
                        }}
                        className={`text-sm font-bold px-3 py-1 rounded-full ${item.bgColor} ${item.textColor}`}
                      >
                        0%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
                      <div
                        ref={(el) => {
                          barsRef.current[index] = el
                        }}
                        className="h-4 rounded-full relative transition-all duration-300"
                        style={{
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                          width: "0%",
                          boxShadow: `0 2px 4px rgba(0,0,0,0.1)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-60 rounded-full"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#22C55E]/10 to-[#16A34A]/10 rounded-lg border border-[#22C55E]/20 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-3 h-3">
                    <div className="w-3 h-3 bg-[#22C55E] rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-[#22C55E] rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm font-semibold text-[#22C55E]">Recomendado para contratação</span>
                </div>
                <p className="text-xs text-gray-600">
                  Baseado no desempenho consistente e feedback positivo de projetos reais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
