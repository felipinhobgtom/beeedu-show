"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

const showcaseData = [
  {
    title: "Honeycomb Token (HCT)",
    description:
      "Moeda digital nativa da plataforma. 1 HCT = R$1,00, utilizada para pagamentos de freelas, projetos e contratações.",
    icon: "🪙",
    color: "from-[#FACC15] to-[#F59E0B]",
    stats: "Conversível para reais via Pix instantâneo",
  },
  {
    title: "Sistema de Níveis",
    description:
      "Progressão gamificada com insígnias temáticas inspiradas em abelhas nativas brasileiras, do 'Melzinho na Chupeta' ao 'Defensor das Polinizadoras'.",
    icon: "🏆",
    color: "from-[#22C55E] to-[#16A34A]",
    stats: "100 níveis com fator multiplicador de 1,5x",
  },
  {
    title: "Job Draft System",
    description:
      "Sistema exclusivo onde empresas fazem ofertas formais de trabalho baseadas no desempenho real dos alunos durante a formação.",
    icon: "⚡",
    color: "from-[#6699FF] to-[#5588EE]",
    stats: "Contratação antecipada com validação digital",
  },
  {
    title: "Freelas Remunerados",
    description:
      "Microprojetos a partir de R$25,00 que proporcionam renda e experiência prática desde o início dos estudos.",
    icon: "💼",
    color: "from-[#8B5CF6] to-[#7C3AED]",
    stats: "Experiência real + Portfolio profissional",
  },
]

const techStack = [
  { name: "Laravel", description: "Backend robusto", icon: "🔧" },
  { name: "React", description: "Interface moderna", icon: "⚛️" },
  { name: "MongoDB", description: "Banco NoSQL", icon: "🍃" },
  { name: "N8N", description: "Automações", icon: "🔄" },
  { name: "WebRTC", description: "Chat integrado", icon: "📹" },
  { name: "Figma", description: "Design System", icon: "🎨" },
]

const platformFeatures = [
  {
    category: "Educação Gamificada",
    features: [
      "Insígnias com abelhas nativas brasileiras",
      "Progressão de níveis com multiplicador 1,5x",
      "Feed social acadêmico entre amigos",
      "Ranking e recompensas por mérito",
    ],
    icon: "🎮",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    category: "Experiência Profissional",
    features: [
      "Freelas remunerados desde R$25,00",
      "Projetos reais com empresas parceiras",
      "Sistema de Draft para contratação",
      "Carteira digital com Honeycomb Token",
    ],
    icon: "💼",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    category: "Tecnologia Avançada",
    features: [
      "Avaliações com detecção de IA",
      "Certificação blockchain com QR",
      "Chat contextualizado com WebRTC",
      "Automações via N8N e integrações",
    ],
    icon: "🚀",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    category: "Impacto Social",
    features: [
      "Vínculo com escolas públicas",
      "Programa de afiliados para educadores",
      "Parcerias com ONGs e governos",
      "Espaços físicos colaborativos",
    ],
    icon: "🌍",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
  },
]

export default function BeeduShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".showcase-title", {
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

      gsap.from(".showcase-card", {
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

      gsap.from(".feature-category", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".tech-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tech-stack",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50/50 relative">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionTitle className="showcase-title mb-6">Inovação que transforma educação em oportunidade.</SectionTitle>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Conheça as funcionalidades exclusivas que fazem da Beeedu a ponte definitiva entre aprendizado e mercado de
            trabalho.
          </p>
        </div>

        {/* Main Showcase Cards - Fixed z-index issues */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {showcaseData.map((item, index) => (
            <div
              key={index}
              className="showcase-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#6699FF]/30 transition-all duration-300 cursor-pointer hover:scale-[1.02] relative z-10"
              style={{ isolation: "isolate" }}
            >
              <div className="text-center">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-2xl relative z-10`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="text-xs text-[#6699FF] font-medium bg-[#6699FF]/10 px-3 py-2 rounded-lg">
                  {item.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Learning Ecosystem */}
        <div className="features-grid mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2F4A60] mb-4">Ecossistema Completo de Aprendizagem</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quatro pilares fundamentais que conectam educação, prática, tecnologia e impacto social em uma única
              plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platformFeatures.map((category, index) => (
              <div
                key={index}
                className="feature-category bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative z-10"
                style={{ isolation: "isolate" }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                >
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-[#6699FF] mr-2 mt-1 text-xs">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack bg-gradient-to-r from-[#2F4A60]/5 to-[#6699FF]/5 rounded-xl p-8 border border-[#6699FF]/10 mb-16">
          <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Stack Tecnológico</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item text-center group cursor-pointer">
                <div className="bg-white rounded-lg p-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <h4 className="font-bold text-[#2F4A60] mb-1 text-sm">{tech.name}</h4>
                  <p className="text-xs text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "25+", label: "Pontos por módulo", color: "text-[#6699FF]", bg: "bg-[#6699FF]/10" },
            { value: "R$ 25", label: "Valor mínimo freelas", color: "text-[#22C55E]", bg: "bg-[#22C55E]/10" },
            { value: "3,5%", label: "Taxa da plataforma", color: "text-[#FACC15]", bg: "bg-[#FACC15]/10" },
            { value: "100%", label: "Foco empregabilidade", color: "text-[#EF4444]", bg: "bg-[#EF4444]/10" },
          ].map((stat, index) => (
            <div
              key={index}
              className="showcase-card bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 relative z-10"
              style={{ isolation: "isolate" }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#6699FF] to-[#5588EE] rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">🚀 Pronto para transformar sua carreira?</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Junte-se a milhares de estudantes que já estão construindo seu futuro profissional na Beeedu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-[#6699FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  Começar Agora
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
