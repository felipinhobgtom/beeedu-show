"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import Image from "next/image"

export default function PersonaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".persona-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".persona-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".persona-details", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const personas = [
    {
      name: "Ana Julia",
      age: "17 anos",
      occupation: "Estudante do Ensino Médio",
      location: "Escola Pública - Periferia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Estuda em escola pública e vive na favela. Carrega o sonho de muitas meninas: ter voz, vez e um futuro possível.",
      challenges: [
        "Vê colegas desistindo da escola porque já não acreditam em mudança",
        "Falta ponte entre o que a gente ensina e o que o mercado exige"
      ],
      painPoints: [
        "Estou cansada de fazer várias entrevistas e nunca ter resposta",
        "Empresas exigindo experiência demais, com regras que parecem feitas pra manter o jovem de fora",
        "Procura oportunidades, mas não sabe se são para ela"
      ],
      quote: "Estou cansada de fazer várias entrevistas e nunca ter resposta.",
      type: "Jovem Talento",
      icon: "👩‍🎓"
    },
    {
      name: "Professora Sandra",
      age: "42 anos",
      occupation: "Coordenadora Pedagógica",
      location: "Escola Pública - 18 anos na educação",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Coordenadora pedagógica muito engajada com o futuro dos alunos. Trabalha há 18 anos na educação.",
      challenges: [
        "Vê alunos desistindo porque não enxergam futuro",
        "Não falta talento, falta oportunidade"
      ],
      painPoints: [
        "Vejo alunos desistindo porque não enxergam futuro",
        "Não falta talento, falta oportunidade",
        "Quero mostrar que a escola pode abrir portas"
      ],
      quote: "Vejo alunos desistindo porque não enxergam futuro. Não falta talento, falta oportunidade.",
      type: "Educadora",
      icon: "👩‍🏫"
    },
    {
      name: "Abner Micael",
      age: "25 anos",
      occupation: "Empresário - Fundador da Everdados",
      location: "Startup de IA para Aviação",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Fundador da Everdados, startup que desenvolve soluções com IA voltadas à aviação e quer abrir portas para jovens entrarem na tecnologia.",
      challenges: [
        "A formação que existe ignora os desafios reais da indústria",
        "A demanda existe, o desafio é achar quem esteja pronto"
      ],
      painPoints: [
        "A formação que existe ignora os desafios reais da indústria",
        "Toda semana tem entrevista. Toda semana, a vaga continua aberta",
        "Mesmo quando contrato, levo meses pra ter retorno real",
        "A demanda existe, o desafio é achar quem esteja pronto"
      ],
      quote: "A demanda existe, o desafio é achar quem esteja pronto.",
      type: "Empresário",
      icon: "👨‍💼"
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(102, 153, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle className="persona-title">
              Nosso Ecossistema de Talentos
            </SectionTitle>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6 max-w-4xl mx-auto">
              A Beeedu conecta três perspectivas fundamentais: jovens em busca de oportunidades, educadores comprometidos com o futuro dos alunos, e empresários que precisam de talentos preparados para os desafios reais do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20" style={{display: 'grid', gridAutoRows: 'max-content', alignItems: 'start'}}>
            {personas.map((persona, index) => (
              <div key={index} className="persona-card bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#6699FF]/20">
                      <Image
                        src={persona.image}
                        alt={persona.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                      <span className="text-lg">{persona.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2F4A60] mb-1">{persona.name}</h3>
                    <p className="text-[#6699FF] font-medium mb-1">{persona.age}</p>
                    <p className="text-gray-600 font-medium mb-1">{persona.occupation}</p>
                    <p className="text-gray-500 text-sm">{persona.location}</p>
                    <span className="inline-block bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 text-[#6699FF] px-3 py-1 rounded-full text-xs font-medium mt-2">
                      {persona.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {persona.description}
                  </p>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-6 mb-8 border-l-4 border-[#6699FF]">
                  <p className="text-gray-700 italic leading-relaxed text-sm">
                    "{persona.quote}"
                  </p>
                </div>

                {/* Details Grid */}
                <div className="persona-details space-y-6">
                  {/* Challenges */}
                  {persona.challenges && persona.challenges.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-[#2F4A60] mb-3 flex items-center gap-2">
                        ⚡ Principais Desafios
                      </h4>
                      <ul className="space-y-2">
                        {persona.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-[#FFAA00] mt-1">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-semibold text-[#2F4A60] mb-3 flex items-center gap-2">
                      😰 Dificuldades Específicas
                    </h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((pain, painIndex) => (
                        <li key={painIndex} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-24 bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-3xl p-8 border border-[#6699FF]/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2F4A60] mb-4">
                A Beeedu Conecta Todos os Pontos
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                Nossa plataforma foi criada para resolver os desafios enfrentados por todos os stakeholders: 
                oferecemos aos jovens oportunidades reais de crescimento, aos educadores ferramentas para 
                engajar alunos, e aos empresários acesso a talentos preparados através da prática.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">👩‍🎓</div>
                  <div className="text-2xl font-bold text-[#6699FF] mb-2">Jovens</div>
                  <div className="text-sm text-gray-600">Experiência prática + Oportunidades reais</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">👩‍🏫</div>
                  <div className="text-2xl font-bold text-[#22C55E] mb-2">Educadores</div>
                  <div className="text-sm text-gray-600">Engajamento + Ponte para o mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍💼</div>
                  <div className="text-2xl font-bold text-[#FFAA00] mb-2">Empresários</div>
                  <div className="text-sm text-gray-600">Talentos preparados + Resultados rápidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
