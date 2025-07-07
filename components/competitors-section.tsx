"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

const competitors = [
  {
    name: "UNESCO Global Skills Academy",
    description:
      "Mobiliza 230 instituições de educação técnica (TVET) em 150 países para oferecer cursos gratuitos de capacitação digital, verde e empreendedora.",
    scope: "Global",
    focus: "Educação Técnica",
    students: "150 países",
    differentiator: "Foco em habilidades digitais e verdes",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "IBM P-TECH",
    description:
      "Escolas de ensino médio público em parceria com faculdades e empresas de tecnologia, permitindo diploma + grau técnico + estágios pagos.",
    scope: "28 países",
    focus: "Tecnologia",
    students: "Comunidades desfavorecidas",
    differentiator: "Modelo dual: ensino médio + técnico",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "GIZ Atingi",
    description:
      "Portal com 550+ cursos online gratuitos em áreas demandadas pelo mercado, com 370+ parceiros globais e certificação digital.",
    scope: "Global",
    focus: "Cursos Abertos",
    students: "Sem limite de idade",
    differentiator: "Flexibilidade máxima de modalidades",
    color: "from-green-500 to-green-600",
  },
  {
    name: "CareerWise Colorado",
    description:
      "Programa multianos onde estudantes trabalham 16-24h semanais em posições remuneradas enquanto cursam escola e recebem créditos universitários.",
    scope: "Regional (EUA)",
    focus: "Aprendizagem Prática",
    students: "Ensino médio",
    differentiator: "Work-based learning remunerado",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "SkillsFuture (Singapura)",
    description:
      "Portal nacional onde cidadãos buscam cursos subsidiados, orientação de carreira e plataformas de busca de empregos.",
    scope: "Nacional",
    focus: "Desenvolvimento Contínuo",
    students: "Todos os cidadãos",
    differentiator: "Subsídio governamental integral",
    color: "from-red-500 to-red-600",
  },
  {
    name: "TAFE NSW (Austrália)",
    description:
      "Parcerias formais com indústrias locais, programas personalizados usando instalações e equipamentos das empresas para aulas práticas.",
    scope: "Regional",
    focus: "Educação Técnica",
    students: "Jovens e adultos",
    differentiator: "Infraestrutura empresarial integrada",
    color: "from-teal-500 to-teal-600",
  },
]

export default function CompetitorsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".competitors-title", {
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

      gsap.from(".competitor-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".beeedu-advantage", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative" id="concorrentes">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle className="competitors-title mb-12">
            Plataformas e Iniciativas Globais de Educação Profissionalizante
          </SectionTitle>

          <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Ao redor do mundo existem várias plataformas que integram escolas com o setor produtivo. Analisamos os
            principais players globais para posicionar a Beeedu de forma única no mercado brasileiro.
          </p>

          {/* Competitors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className="competitor-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${competitor.color} rounded-bl-full`}></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">{competitor.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{competitor.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Alcance:</span>
                      <span className="font-semibold text-gray-700">{competitor.scope}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Foco:</span>
                      <span className="font-semibold text-gray-700">{competitor.focus}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Público:</span>
                      <span className="font-semibold text-gray-700">{competitor.students}</span>
                    </div>
                  </div>

                  <div
                    className={`text-xs font-medium px-3 py-2 rounded-lg bg-gradient-to-r ${competitor.color} text-white`}
                  >
                    {competitor.differentiator}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beeedu's Competitive Advantage */}
          <div className="beeedu-advantage bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-8 border border-[#6699FF]/20">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-6 text-center">Diferencial Competitivo da Beeedu</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6699FF] to-[#5588EE] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-[#2F4A60] mb-2">Foco no Brasil</h4>
                <p className="text-sm text-gray-600">
                  Única plataforma focada especificamente na realidade da educação pública brasileira e mercado local.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-[#2F4A60] mb-2">Job Draft System</h4>
                <p className="text-sm text-gray-600">
                  Sistema exclusivo onde empresas fazem ofertas formais baseadas em performance real durante a formação.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FACC15] to-[#F59E0B] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🎮</span>
                </div>
                <h4 className="font-bold text-[#2F4A60] mb-2">Gamificação Brasileira</h4>
                <p className="text-sm text-gray-600">
                  Insígnias temáticas com abelhas nativas brasileiras e mecânicas de jogo adaptadas à cultura local.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white/50 px-6 py-3 rounded-full">
                <span className="text-[#6699FF] font-bold">🐝</span>
                <span className="text-sm font-semibold text-[#2F4A60]">
                  Beeedu: A única plataforma que combina educação, renda imediata e empregabilidade garantida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
