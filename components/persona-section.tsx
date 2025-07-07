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
      name: "Ana Júlia",
      age: "23 anos",
      occupation: "Recém-formada em Design Gráfico",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d7b758?w=300&h=300&fit=crop&crop=face",
      goals: [
        "Conseguir o primeiro emprego na área",
        "Desenvolver portfólio profissional",
        "Ganhar experiência prática",
        "Construir network profissional"
      ],
      painPoints: [
        "Muitas entrevistas sem retorno",
        "Falta de experiência prática",
        "Dificuldade para se destacar",
        "Ansiedade com o futuro profissional"
      ],
      quote: "Estou cansada de fazer várias entrevistas e nunca ter resposta. Preciso de uma oportunidade real para mostrar meu potencial.",
      motivations: [
        "Independência financeira",
        "Crescimento profissional",
        "Reconhecimento do trabalho",
        "Estabilidade na carreira"
      ],
      techComfort: "Intermediário",
      preferredLearning: "Prática + Teoria",
      socialMedia: ["Instagram", "LinkedIn", "Behance"]
    },
    {
      name: "Carlos Eduardo",
      age: "19 anos", 
      occupation: "Estudante de Sistemas de Informação",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      goals: [
        "Aprender programação na prática",
        "Ganhar dinheiro enquanto estuda",
        "Construir experiência real",
        "Desenvolver soft skills"
      ],
      painPoints: [
        "Teoria sem aplicação prática",
        "Falta de orientação profissional",
        "Dificuldade financeira",
        "Síndrome do impostor"
      ],
      quote: "Quero aplicar o que aprendo na faculdade em projetos reais, mas não sei por onde começar.",
      motivations: [
        "Aprendizado contínuo",
        "Autonomia financeira",
        "Inovação tecnológica",
        "Impacto social positivo"
      ],
      techComfort: "Avançado",
      preferredLearning: "Hands-on",
      socialMedia: ["GitHub", "Discord", "Reddit", "LinkedIn"]
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
              Nossos Jovens Talentos
            </SectionTitle>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
              Conheça os perfis dos jovens que a Beeedu conecta com oportunidades reais no mercado de trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {personas.map((persona, index) => (
              <div key={index} className="persona-card bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#6699FF]/20">
                      <Image
                        src={persona.image}
                        alt={persona.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2F4A60]">{persona.name}</h3>
                    <p className="text-[#6699FF] font-medium">{persona.age}</p>
                    <p className="text-gray-600">{persona.occupation}</p>
                    <p className="text-gray-500 text-sm">{persona.location}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-6 mb-8 border-l-4 border-[#6699FF]">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{persona.quote}"
                  </p>
                </div>

                {/* Details Grid */}
                <div className="persona-details space-y-6">
                  {/* Goals */}
                  <div>
                    <h4 className="font-semibold text-[#2F4A60] mb-3 flex items-center gap-2">
                      🎯 Objetivos
                    </h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-[#22C55E] mt-1">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-semibold text-[#2F4A60] mb-3 flex items-center gap-2">
                      😰 Principais Dificuldades
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

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Conforto Tech</p>
                      <p className="text-sm font-medium text-[#6699FF]">{persona.techComfort}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Aprendizado</p>
                      <p className="text-sm font-medium text-[#22C55E]">{persona.preferredLearning}</p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Redes Sociais</p>
                    <div className="flex flex-wrap gap-2">
                      {persona.socialMedia.map((platform, platformIndex) => (
                        <span key={platformIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-3xl p-8 border border-[#6699FF]/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2F4A60] mb-4">
                A Beeedu Entende Esses Desafios
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Nossa plataforma foi criada especificamente para resolver as dores desses jovens talentos, 
                oferecendo oportunidades reais de trabalho, aprendizado prático e desenvolvimento de carreira 
                em um ambiente gamificado e motivador.
              </p>
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6699FF]">85%</div>
                  <div className="text-sm text-gray-600">Jovens sem experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">72%</div>
                  <div className="text-sm text-gray-600">Preferem aprender fazendo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFAA00]">90%</div>
                  <div className="text-sm text-gray-600">Querem feedback rápido</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
