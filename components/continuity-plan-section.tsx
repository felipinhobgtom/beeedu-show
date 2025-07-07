"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

const phases = [
  {
    phase: "Fase 1: MVP e Validação",
    duration: "6 meses",
    description: "Desenvolvimento do produto mínimo viável e validação com escolas piloto",
    milestones: [
      "Plataforma básica funcional",
      "5 escolas públicas piloto",
      "100 estudantes ativos",
      "10 empresas parceiras",
      "Validação do modelo de negócio",
    ],
    investment: "R$ 800.000",
    color: "from-blue-500 to-blue-600",
    icon: "🚀",
  },
  {
    phase: "Fase 2: Expansão Regional",
    duration: "12 meses",
    description: "Expansão para múltiplas cidades e refinamento da plataforma",
    milestones: [
      "50 escolas públicas integradas",
      "2.000 estudantes ativos",
      "100 empresas parceiras",
      "Sistema de gamificação completo",
      "Primeira rodada de investimento",
    ],
    investment: "R$ 2.500.000",
    color: "from-green-500 to-green-600",
    icon: "📈",
  },
  {
    phase: "Fase 3: Escala Nacional",
    duration: "18 meses",
    description: "Expansão nacional e diversificação de serviços",
    milestones: [
      "500 escolas públicas",
      "25.000 estudantes ativos",
      "1.000 empresas parceiras",
      "Plataforma de certificação blockchain",
      "Break-even operacional",
    ],
    investment: "R$ 8.000.000",
    color: "from-purple-500 to-purple-600",
    icon: "🌟",
  },
  {
    phase: "Fase 4: Consolidação",
    duration: "24 meses",
    description: "Consolidação como líder de mercado e expansão internacional",
    milestones: [
      "2.000 escolas integradas",
      "100.000 estudantes ativos",
      "5.000 empresas parceiras",
      "Expansão para América Latina",
      "IPO ou aquisição estratégica",
    ],
    investment: "R$ 15.000.000",
    color: "from-orange-500 to-red-500",
    icon: "👑",
  },
]

const riskMitigation = [
  {
    risk: "Resistência das Escolas",
    mitigation: "Programa de capacitação para educadores e demonstração de resultados tangíveis",
    probability: "Média",
    impact: "Alto",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    risk: "Concorrência de Grandes Players",
    mitigation: "Foco em diferenciação (Job Draft) e parcerias estratégicas exclusivas",
    probability: "Alta",
    impact: "Alto",
    color: "bg-red-100 text-red-800",
  },
  {
    risk: "Mudanças Regulatórias",
    mitigation: "Compliance proativo e relacionamento com órgãos reguladores",
    probability: "Baixa",
    impact: "Médio",
    color: "bg-green-100 text-green-800",
  },
  {
    risk: "Dificuldades de Financiamento",
    mitigation: "Diversificação de fontes de capital e modelo de receita sustentável",
    probability: "Média",
    impact: "Alto",
    color: "bg-yellow-100 text-yellow-800",
  },
]

const sustainabilityPillars = [
  {
    title: "Sustentabilidade Financeira",
    description: "Modelo de receita diversificado e escalável",
    strategies: [
      "Taxa de 3.5% sobre transações",
      "Assinaturas premium para empresas",
      "Certificações e cursos pagos",
      "Parcerias com governos",
    ],
    icon: "💰",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    title: "Sustentabilidade Tecnológica",
    description: "Arquitetura moderna e adaptável",
    strategies: [
      "Cloud-native e microserviços",
      "APIs abertas para integrações",
      "IA para personalização",
      "Blockchain para certificação",
    ],
    icon: "⚙️",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "Sustentabilidade Social",
    description: "Impacto social mensurável e crescente",
    strategies: ["Foco em escolas públicas", "Programa de bolsas", "Parcerias com ONGs", "Métricas de impacto social"],
    icon: "🌍",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
]

export default function ContinuityPlanSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".continuity-title", {
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

      gsap.from(".phase-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".phases-timeline",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".risk-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".risk-analysis",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".sustainability-pillar", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sustainability-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-white relative" id="plano-continuidade">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle className="continuity-title mb-12">Plano de Continuidade</SectionTitle>

          <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Estratégia estruturada para crescimento sustentável, mitigação de riscos e consolidação da Beeedu como líder
            no mercado de educação profissionalizante.
          </p>

          {/* Development Phases Timeline */}
          <div className="phases-timeline mb-16">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Fases de Desenvolvimento</h3>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="phase-card relative">
                  {/* Timeline connector */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent hidden md:block"></div>
                  )}

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-2xl shadow-md`}
                        >
                          {phase.icon}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                          <div className="flex gap-4 text-sm">
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">⏱️ {phase.duration}</span>
                            <span className={`bg-gradient-to-r ${phase.color} text-white px-3 py-1 rounded-full`}>
                              💰 {phase.investment}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{phase.description}</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {phase.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <span className="text-[#22C55E] mr-2">✓</span>
                              <span>{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Analysis */}
          <div className="risk-analysis mb-16">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Análise e Mitigação de Riscos</h3>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#2F4A60] text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Risco Identificado</th>
                      <th className="text-left p-4 font-semibold">Estratégia de Mitigação</th>
                      <th className="text-center p-4 font-semibold">Probabilidade</th>
                      <th className="text-center p-4 font-semibold">Impacto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskMitigation.map((risk, index) => (
                      <tr key={index} className="risk-item border-t border-gray-100">
                        <td className="p-4 font-medium text-gray-900">{risk.risk}</td>
                        <td className="p-4 text-gray-700">{risk.mitigation}</td>
                        <td className="p-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${risk.color}`}>
                            {risk.probability}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${risk.color}`}>
                            {risk.impact}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sustainability Pillars */}
          <div className="sustainability-grid">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Pilares de Sustentabilidade</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {sustainabilityPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="sustainability-pillar bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center text-2xl mb-4 shadow-md`}
                  >
                    {pillar.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.strategies.map((strategy, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-[#6699FF] mr-2 mt-1 text-xs">•</span>
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-8 border border-[#6699FF]/20">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-6 text-center">Métricas de Sucesso (5 anos)</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#6699FF] mb-1">2.000+</div>
                <div className="text-sm text-gray-600">Escolas Integradas</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#22C55E] mb-1">100k+</div>
                <div className="text-sm text-gray-600">Estudantes Ativos</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#FACC15] mb-1">5.000+</div>
                <div className="text-sm text-gray-600">Empresas Parceiras</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#EF4444] mb-1">R$ 50M</div>
                <div className="text-sm text-gray-600">Receita Anual</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                Consolidação como a principal plataforma de educação profissionalizante do Brasil, com expansão para
                América Latina e impacto social mensurável em milhões de vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
