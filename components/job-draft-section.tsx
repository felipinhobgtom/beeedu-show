"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"

export default function JobDraftSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".job-draft-content", {
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

      // Animação do popup
      const popupTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        onEnter: () => {
          setTimeout(() => {
            setShowPopup(true)
            if (popupRef.current) {
              gsap.fromTo(
                popupRef.current,
                {
                  scale: 0,
                  opacity: 0,
                  rotation: -10,
                },
                {
                  scale: 1,
                  opacity: 1,
                  rotation: 0,
                  duration: 0.8,
                  ease: "back.out(1.7)",
                },
              )

              // Efeito de brilho e celebração
              gsap.to(popupRef.current, {
                boxShadow: "0 0 40px rgba(102, 153, 255, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)",
                duration: 0.5,
                yoyo: true,
                repeat: 2,
              })

              // Confetti effect
              createConfetti()
            }
          }, 1200)
        },
      })

      return () => {
        popupTrigger.kill()
      }
    }, sectionRef)

    const createConfetti = () => {
      const colors = ["#6699FF", "#22C55E", "#FACC15", "#EF4444"]

      for (let i = 0; i < 15; i++) {
        const confetti = document.createElement("div")
        confetti.className = "absolute w-3 h-3 rounded-full pointer-events-none"
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.left = "50%"
        confetti.style.top = "50%"
        confetti.style.zIndex = "1000"

        if (popupRef.current) {
          popupRef.current.appendChild(confetti)

          gsap.to(confetti, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            scale: 0,
            rotation: Math.random() * 360,
            duration: 2,
            ease: "power2.out",
            delay: i * 0.05,
            onComplete: () => confetti.remove(),
          })
        }
      }
    }

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-[#6699FF]/5 via-white to-[#22C55E]/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTitle className="job-draft-content">Seja "draftado" pelo mercado.</SectionTitle>

          <p className="job-draft-content text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Nosso sistema de Job Draft permite que empresas façam ofertas formais de trabalho com base no seu desempenho
            real na plataforma. Aqui, seu mérito abre as portas antes mesmo de você bater nelas.
          </p>

          {/* Simulação de perfil */}
          <div className="job-draft-content relative max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6699FF]/5 to-transparent"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6699FF] to-[#2F4A60] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 text-lg">João Silva</h3>
                  <p className="text-sm text-gray-500">Desenvolvedor Frontend</p>
                </div>
              </div>

              <div className="space-y-3 text-left relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Projetos concluídos</span>
                  <span className="text-sm font-semibold text-[#6699FF]">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avaliação média</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-[#FACC15]">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-[#FACC15] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Insígnias conquistadas</span>
                  <span className="text-sm font-semibold text-[#22C55E]">8</span>
                </div>
              </div>
            </div>

            {/* Popup de notificação */}
            {showPopup && (
              <div
                ref={popupRef}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white p-6 rounded-xl shadow-2xl max-w-xs opacity-0 z-20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Parabéns!</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Você foi draftado pela <strong>TechCorp</strong> para a vaga de Frontend Developer!
                </p>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-[#22C55E] transform rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
