"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

const impactMetrics = [
  {
    title: "Redução da Evasão Escolar",
    target: "40%",
    description: "Diminuição da evasão no ensino médio através de renda imediata e perspectiva de carreira",
    icon: "📚",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Inserção no Mercado",
    target: "85%",
    description: "Taxa de empregabilidade dos formandos em até 6 meses após conclusão dos cursos",
    icon: "💼",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Aumento de Renda Familiar",
    target: "R$ 800",
    description: "Renda média mensal adicional por família através dos freelas dos estudantes",
    icon: "💰",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Escolas Públicas Impactadas",
    target: "500+",
    description: "Número de escolas públicas integradas à plataforma nos primeiros 3 anos",
    icon: "🏫",
    color: "from-purple-500 to-purple-600",
  },
]

const socialGoals = [
  {
    category: "Educação Inclusiva",
    goals: [
      "Democratizar acesso à educação profissionalizante de qualidade",
      "Reduzir desigualdades educacionais entre classes sociais",
      "Promover educação continuada e lifelong learning",
      "Integrar tecnologia na educação pública de forma sustentável",
    ],
    icon: "🎓",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    category: "Desenvolvimento Econômico",
    goals: [
      "Gerar renda imediata para estudantes de baixa renda",
      "Criar ponte direta entre educação e mercado de trabalho",
      "Fomentar empreendedorismo jovem através de freelas",
      "Reduzir desemprego juvenil em comunidades vulneráveis",
    ],
    icon: "📈",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    category: "Transformação Social",
    goals: [
      "Quebrar ciclos de pobreza através da educação",
      "Empoderar jovens com habilidades do século XXI",
      "Promover igualdade de gênero no mercado tech",
      "Fortalecer comunidades através da educação colaborativa",
    ],
    icon: "🌍",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
]

export default function SocialImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".impact-title", {
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

      gsap.from(".impact-metric", {
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

      gsap.from(".social-goal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".social-goals-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-white relative" id="impacto-social">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle className="impact-title mb-12">Impacto Social Esperado</SectionTitle>

          <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            A Beeedu não é apenas uma plataforma educacional, é um movimento de transformação social que visa quebrar
            barreiras estruturais e criar oportunidades reais para jovens brasileiros.
          </p>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="impact-metric bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                >
                  {metric.target}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 font-poppins">{metric.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Social Goals */}
          <div className="social-goals-grid">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Objetivos de Desenvolvimento Social</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {socialGoals.map((goal, index) => (
                <div
                  key={index}
                  className="social-goal bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${goal.color} flex items-center justify-center text-2xl mb-4 shadow-md`}
                  >
                    {goal.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{goal.category}</h4>
                  <ul className="space-y-3">
                    {goal.goals.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-[#6699FF] mr-2 mt-1 text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ODS Alignment */}
          <div className="bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-8 border border-[#6699FF]/20">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-6 text-center">
              Alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS)
            </h3>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-[#2F4A60] mb-1">ODS 4</div>
                <div className="text-xs text-gray-600">Educação de Qualidade</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-sm font-semibold text-[#2F4A60] mb-1">ODS 8</div>
                <div className="text-xs text-gray-600">Trabalho Decente</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="text-sm font-semibold text-[#2F4A60] mb-1">ODS 10</div>
                <div className="text-xs text-gray-600">Redução das Desigualdades</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm font-semibold text-[#2F4A60] mb-1">ODS 17</div>
                <div className="text-xs text-gray-600">Parcerias e Meios</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                A Beeedu contribui diretamente para 4 dos 17 Objetivos de Desenvolvimento Sustentável da ONU,
                posicionando-se como uma solução alinhada às metas globais de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
