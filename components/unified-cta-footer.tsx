"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import SectionTitle from "./ui/section-title"
import Button from "./ui/button"
import BeeduLogo from "./ui/beeedu-logo"
import BackgroundEffects from "./background-effects"

export default function UnifiedCTAFooter() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // CTA content animation
      gsap.from(".cta-content", {
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

      // Footer content animation
      gsap.from(".footer-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      // Animated glow effect
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.3,
          scale: 1.1,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#6699FF] via-[#5588EE] to-[#2F4A60] text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <BackgroundEffects variant="dark" intensity="high" />

      {/* Animated Glow Effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/20 to-[#FACC15]/20 blur-3xl opacity-0"
      ></div>

      {/* Main CTA Section */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Primary CTA Content */}
            <div className="mb-16">
              <SectionTitle className="cta-content text-white mb-8">
                Faça parte da colmeia que está transformando o futuro.
              </SectionTitle>

              <p className="cta-content text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto font-light">
                Seja você um estudante pronto para decolar, ou uma empresa buscando talentos com propósito. O seu lugar
                é na Beeedu.
              </p>
              
              {/* Value Proposition Cards */}
              <div className="cta-content grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl mb-4 floating-element">🐝</div>
                  <h3 className="text-xl font-bold mb-3">Para Estudantes</h3>
                  <p className="text-white/80 leading-relaxed">
                    Aprenda, pratique e ganhe dinheiro desde o primeiro dia. Freelas remunerados, gamificação e Job
                    Draft exclusivo.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl mb-4 floating-element">🚀</div>
                  <h3 className="text-xl font-bold mb-3">Para Empresas</h3>
                  <p className="text-white/80 leading-relaxed">
                    Recrute talentos com base em performance real. Acompanhe evolução, ofereça projetos e contrate com
                    dados.
                  </p>
                </div>
              </div>
            </div>

            {/* Transition Element */}
            <div className="cta-content flex items-center justify-center mb-16">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                <div className="text-2xl floating-element">🍯</div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Footer Section */}
      <div className="py-16 relative z-10 bg-[#2F4A60]/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4">
          {/* Footer Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="footer-content md:col-span-1">
              <div className="mb-6">
                <BeeduLogo size="lg" className="text-white mb-4" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Conectando educação ao mercado de trabalho através de uma plataforma colaborativa, viva e justa.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="floating-element">🐝</span>
                <span>Formar • Ensinar • Conectar</span>
              </div>
            </div>

            {/* Institucional */}
            <div className="footer-content">
              <h3 className="text-lg font-semibold mb-6 text-[#6699FF]">Institucional</h3>
              <ul className="space-y-3">
                {[
                  { href: "/sobre", label: "Sobre" },
                  { href: "/cursos", label: "Cursos" },
                  { href: "/parceiros", label: "Parceiros" },
                  { href: "/termos", label: "Termos" },
                  { href: "/privacidade", label: "Privacidade" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                    >
                      <span className="w-2 h-2 bg-[#6699FF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comunidade */}
            <div className="footer-content">
              <h3 className="text-lg font-semibold mb-6 text-[#22C55E]">Comunidade</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://whatsapp.com/beeedu"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-[#22C55E] group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/beeedu"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-[#6699FF] group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/company/beeedu"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-[#0077B5] group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div className="footer-content">
              <h3 className="text-lg font-semibold mb-6 text-[#FACC15]">Recursos</h3>
              <ul className="space-y-3">
                {[
                  { href: "/blog", label: "Blog" },
                  { href: "/carreiras", label: "Carreiras" },
                  { href: "/imprensa", label: "Imprensa" },
                  { href: "/contato", label: "Contato" },
                  { href: "/ajuda", label: "Central de Ajuda" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                    >
                      <span className="w-2 h-2 bg-[#FACC15] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-content border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright and Legal */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm mb-2">
                  © {new Date().getFullYear()} Beeedu. Todos os direitos reservados.
                </p>
                <p className="text-xs text-gray-500">
                  Conectando educação ao mercado de trabalho desde 2024 • CNPJ: XX.XXX.XXX/0001-XX
                </p>
              </div>

              {/* Social Proof */}
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-4 mb-2">
                  <div className="flex items-center gap-1 text-sm text-white/70">
                    <span className="text-[#22C55E]">●</span>
                    <span>2.847+ estudantes ativos</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white/70">
                    <span className="text-[#FACC15]">●</span>
                    <span>47+ empresas parceiras</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Plataforma em constante crescimento</p>
              </div>
            </div>
          </div>

          {/* Final Decorative Element */}
          <div className="footer-content mt-8 text-center">
            <div className="inline-flex items-center gap-3 text-sm text-white/60">
              <span className="floating-element text-lg">🐝</span>
              <span>Feito com propósito pela colmeia Beeedu</span>
              <span className="floating-element text-lg">🍯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
