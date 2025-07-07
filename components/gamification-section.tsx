"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BadgeCard from "./ui/badge-card"
import BeeeduGuardian from "./svg_component_badges/BeeeduGuardian"
import QueenBee from "./svg_component_badges/QueenBee"
import BeeeduMaster from "./svg_component_badges/BeeeduMaster"
import DroneBeeKing from "./svg_component_badges/DroneBeeKing"
import LittleHoneyOnThePacifier from "./svg_component_badges/LittleHoneyOnThePacifier" 

const badges = [
  {
    name: "Guardião das Abelhas",
    rarity: "Lendária",
    color: "from-yellow-400 via-yellow-500 to-orange-500",
    icon: <BeeeduGuardian />,
    level: "Nível 10",
  },
  {
    name: "Sentinela do Mel",
    rarity: "Rara",
    color: "from-purple-400 via-purple-500 to-pink-500",
    icon: <LittleHoneyOnThePacifier />,
    level: "Nível 95",
  },
  {
    name: "Rainha das Abelhas",
    rarity: "Mítica",
    color: "from-pink-400 via-purple-500 to-indigo-500",
    icon: <QueenBee />,
    isSpecial: true,
    level: "Exclusivo Feminino",
    isWomenOnly: true,
  },
  {
    name: "Mestre da Colmeia",
    rarity: "Lendária",
    color: "from-red-400 via-red-500 to-yellow-500",
    icon: <BeeeduMaster />,
    level: "Nível 50",
  },
  {
    name: "Explorador do Néctar",
    rarity: "Rara",
    color: "from-blue-400 via-blue-500 to-purple-500",
    icon: <DroneBeeKing />,
    level: "Nível 25",
  },
]

export default function GamificationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".gamification-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".gamification-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".badge-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      // Optimized floating animation
      gsap.to(".badge-card", {
        y: -3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle honey pattern background without blur */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(250, 204, 21, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <SectionTitle className="gamification-title">Seu progresso vira reconhecimento.</SectionTitle>

          <div className="gamification-text space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              <strong>Sistema de Pontuação:</strong> +25 pontos por módulo concluído, +150 por curso completo, +225 por
              freela entregue.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Evolua através de níveis e colecione insígnias temáticas inspiradas em abelhas. Na Beeedu, seu mérito é
              visível e recompensado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <div key={index} className="relative">
              <BadgeCard
                name={badge.name}
                rarity={badge.rarity}
                color={badge.color}
                icon={badge.icon}
                level={badge.level}
                className="badge-card"
                isSpecial={badge.isSpecial}
                isWomenOnly={badge.isWomenOnly}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-8 border border-[#6699FF]/20 rainbow-border">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-4">Mecânicas de Gamificação</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-[#6699FF] mb-2">Freelas e Projetos:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Microprojetos pagos (a partir de R$ 25,00)</li>
                  <li>• Desafios complexos (a partir de R$ 250,00)</li>
                  <li>• Portfolio real e experiência prática</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#22C55E] mb-2">Sistema de Reputação:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Score de "Confiabilidade" para empresas</li>
                  <li>• Baseado em conclusão de projetos</li>
                  <li>• Histórico de pagamentos e feedbacks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
