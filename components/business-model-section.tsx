"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

const businessModels = [
  {
    title: "Para Alunos",
    subtitle: "Aprenda, pratique e ganhe",
    description:
      "Acesso a cursos profissionalizantes, freelas remunerados desde o início, sistema de gamificação com insígnias exclusivas e oportunidades reais de emprego via Job Draft.",
    features: [
      "Cursos gratuitos ou com desconto para escolas públicas",
      "Freelas a partir de R$ 25,00",
      "Sistema de níveis e insígnias temáticas",
      "Certificação digital reconhecida",
      "Job Draft para contratação antecipada",
    ],
    icon: "🎓",
    color: "from-[#6699FF] to-[#5588EE]",
    accent: "border-[#6699FF]/20",
  },
  {
    title: "Para Empresas",
    subtitle: "Recrute, forme e inove",
    description:
      "Acesso direto a talentos em formação, economia em processos seletivos, possibilidade de acompanhar evolução em tempo real e formar equipes com base em dados reais de performance.",
    features: [
      "Recrutamento baseado em dados reais",
      "Economia em processos seletivos",
      "Formação customizada de talentos",
      "Sistema de avaliação transparente",
      "Parcerias estratégicas com benefícios",
    ],
    icon: "🏢",
    color: "from-[#22C55E] to-[#16A34A]",
    accent: "border-[#22C55E]/20",
  },
  {
    title: "Para Professores",
    subtitle: "Ensine, conecte e prospere",
    description:
      "Plataforma para criar cursos, conectar-se com empresas, acompanhar progresso dos alunos e receber remuneração justa por impacto educacional comprovado.",
    features: [
      "Criação de cursos com validação editorial",
      "Conexão direta com empresas",
      "Acompanhamento detalhado de alunos",
      "Remuneração por performance",
      "Contratos garantidos pela plataforma",
    ],
    icon: "👨‍🏫",
    color: "from-[#F59E0B] to-[#D97706]",
    accent: "border-[#F59E0B]/20",
  },
]

export default function BusinessModelSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".business-title", {
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

      gsap.from(".business-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-white relative overflow-hidden">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <SectionTitle className="business-title">Proposta de Valor por Audiência</SectionTitle>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Beeedu oferece soluções específicas para cada perfil, criando um ecossistema onde todos prosperam através
            da educação conectada ao mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {businessModels.map((model, index) => (
            <div
              key={index}
              className={`business-card bg-white rounded-2xl p-6 shadow-lg border-2 ${model.accent} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Subtle background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div className={`w-full h-full bg-gradient-to-br ${model.color}`}></div>
              </div>

              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
                >
                  {model.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{model.title}</h3>
                <p className="text-base text-[#6699FF] font-semibold mb-3">{model.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{model.description}</p>

                {/* Features with better spacing */}
                <ul className="space-y-2 mb-6">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-[#6699FF] mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${model.color} text-white font-semibold hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-sm`}
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
