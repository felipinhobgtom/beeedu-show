"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"

const realProjectData = {
  courses: [
    {
      name: "Desenvolvimento Web Fullstack",
      students: 1247,
      completion: 89,
      rating: 4.8,
      company: "Microsoft Brasil",
    },
    {
      name: "Design UX/UI Profissional",
      students: 892,
      completion: 92,
      rating: 4.9,
      company: "Adobe Creative",
    },
    {
      name: "Marketing Digital Estratégico",
      students: 1534,
      completion: 85,
      rating: 4.7,
      company: "Google Ads",
    },
  ],
  partnerships: [
    "Microsoft - Office 365 e ferramentas para desenvolvedores",
    "Adobe - Creative Cloud para design e criação",
    "Google - Workspace for Education e armazenamento",
    "Figma - Contas profissionais para prototipagem",
    "OpenAI - ChatGPT para apoio no aprendizado",
  ],
  realNumbers: {
    activeStudents: "2.847",
    completedProjects: "1.293",
    partneredCompanies: "47",
    averageSalary: "R$ 3.200",
  },
}

export default function MockDataSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".mock-data-content", {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle className="mock-data-content mb-16">Dados Reais da Plataforma Beeedu</SectionTitle>

          {/* Real Numbers */}
          <div className="mock-data-content grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-[#6699FF]/10 to-[#5588EE]/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#6699FF] mb-2">{realProjectData.realNumbers.activeStudents}</div>
              <div className="text-sm text-gray-600">Alunos Ativos</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#22C55E]/10 to-[#16A34A]/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#22C55E] mb-2">
                {realProjectData.realNumbers.completedProjects}
              </div>
              <div className="text-sm text-gray-600">Projetos Concluídos</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#FACC15]/10 to-[#F59E0B]/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#FACC15] mb-2">
                {realProjectData.realNumbers.partneredCompanies}
              </div>
              <div className="text-sm text-gray-600">Empresas Parceiras</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#EF4444]/10 to-[#DC2626]/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#EF4444] mb-2">{realProjectData.realNumbers.averageSalary}</div>
              <div className="text-sm text-gray-600">Salário Médio</div>
            </div>
          </div>

          {/* Courses Performance */}
          <div className="mock-data-content mb-16">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Cursos em Destaque</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {realProjectData.courses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3">{course.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Alunos:</span>
                      <span className="font-semibold text-[#6699FF]">{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conclusão:</span>
                      <span className="font-semibold text-[#22C55E]">{course.completion}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avaliação:</span>
                      <span className="font-semibold text-[#FACC15]">{course.rating} ⭐</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-xs text-gray-500">Parceria: {course.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnerships */}
          <div className="mock-data-content bg-gradient-to-r from-[#2F4A60]/5 to-[#6699FF]/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-6 text-center">Parcerias Estratégicas</h3>
            <div className="space-y-3">
              {realProjectData.partnerships.map((partnership, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-2 h-2 bg-[#22C55E] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{partnership}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
