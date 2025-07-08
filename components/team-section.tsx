"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import SectionTitle from "./ui/section-title"

const teamMembers = [
  {
    name: "Nicholas Oliveira",
    role: "CEO / P.O / Designer",
    description: "Visionário por trás da missão de conectar educação ao mercado de trabalho",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQHCgaH-6EF9Aw/profile-displayphoto-shrink_200_200/B4DZWEj5v3HAAY-/0/1741685759398?e=1757548800&v=beta&t=HDHieztlOEelbdpA8DA1GyifM2pYVlRMQeFE2BEIPso",
    color: "from-[#6699FF] to-[#5588EE]",
    fallback: "NO",
  },
  {
    name: "Felipe Barros",
    role: "Desenvolvedor Fullstack",
    description: "Especialista em desenvolvimento completo, do front-end ao back-end",
    avatar:
      "/felipe.png",
    color: "from-[#22C55E] to-[#16A34A]",
    fallback: "FB",
  },
  {
    name: "Murilo Chleba",
    role: "Desenvolvedor Back-end",
    description: "Arquiteto de sistemas robustos e escaláveis para a plataforma",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQHLB2VPpacTSw/profile-displayphoto-shrink_200_200/B4DZO4WmFSGgAY-/0/1733964751779?e=1757548800&v=beta&t=6ncH3oF7zXDsqiY23cv1mHJY_F6GSmP00Ec_mFW7bSY",
    color: "from-[#FACC15] to-[#F59E0B]",
    fallback: "MC",
  },
  {
    name: "Igor Vinicius",
    role: "Partnership Manager",
    description: "Responsável por conectar empresas e construir o ecossistema Beeedu",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQH73tJ-UNJnSg/profile-displayphoto-shrink_200_200/B56ZWZchb0HsAY-/0/1742036147019?e=1757548800&v=beta&t=QFiBQ4k8cmlBuT6l87zs5jwdZwIOOGKH9sV3H-wG0go",
    color: "from-[#EF4444] to-[#DC2626]",
    fallback: "IV",
  },
  {
    name: "Andre Vilela",
    role: "Desenvolvedor Front-end",
    description: "Especialista em interfaces intuitivas e experiência do usuário",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQHZZu9ER6Dinw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719022366072?e=1757548800&v=beta&t=F5Imldy6feMuWF2Ke28Oua_8CyX-1nLJEMca1lkeM-s",
    color: "from-[#8B5CF6] to-[#7C3AED]",
    fallback: "AV",
  },
  {
    name: "Thiago Henrique",
    role: "Project Manager / UI UX",
    description: "Gestor de projetos e designer de experiências excepcionais",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQHabXhYG2VDTw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732138241480?e=1757548800&v=beta&t=07zYuK1eoLBIqlRhEg2zJbndzsSBg5LR9ybr9puE-_Y",
    color: "from-[#06B6D4] to-[#0891B2]",
    fallback: "TH",
  },
]

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Smooth title animation
      gsap.from(".team-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Smooth description animation
      gsap.from(".team-description", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Smooth photo animation
      gsap.from(".team-photo", {
        y: 25,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Smoother team member animations
      gsap.from(".team-member", {
        y: 30,
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

      // Very subtle floating animation
      gsap.to(".team-member", {
        y: -2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 4,
          from: "random",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      id="equipe"
    >
      {/* Subtle honey-inspired background without blur */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(250, 204, 21, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <SectionTitle className="team-title">A colmeia por trás da transformação.</SectionTitle>

          <p className="team-description text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Conheça as mentes visionárias que trabalham incansavelmente para conectar educação, trabalho e oportunidade.
            Cada membro da nossa equipe traz expertise única para construir o futuro da educação profissionalizante.
          </p>

          {/* Team Photo */}
          <div className="team-photo mb-12">
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/post.jpg"
                alt="Equipe Beeedu - Os desenvolvedores e colaboradores por trás da plataforma"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg mb-2 drop-shadow-lg">Equipe Beeedu 2024</p>
                <p className="text-white text-sm drop-shadow-md">
                  Unidos pela missão de transformar a educação brasileira e conectar talentos ao mercado de trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#6699FF]/30 transition-all duration-500 cursor-pointer hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6699FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-500 relative">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient avatar with initials if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl">
                            ${member.fallback}
                          </div>
                        `
                      }
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{member.name}</h3>
                <p className="text-[#6699FF] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 px-8 py-4 rounded-full border border-[#6699FF]/20">
            <div className="flex -space-x-2">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div key={index} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xs font-bold">
                            ${member.fallback}
                          </div>
                        `
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            <span className="text-[#2F4A60] font-semibold">Juntos, construindo o futuro da educação brasileira</span>
          </div>
        </div>
      </div>
    </section>
  )
}
