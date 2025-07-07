"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionTitle from "./ui/section-title"
import BackgroundEffects from "./background-effects"

const costData = {
  capex: [
    {
      category: "Gestão e Estratégia",
      items: [
        { name: "Kick-off e Alinhamento", details: "8 horas x R$ 150,00/hora", cost: 1200 },
        { name: "Planejamento de Sprints", details: "40 horas x R$ 150,00/hora", cost: 6000 },
        { name: "Documentação de Onboarding", details: "16 horas x R$ 150,00/hora", cost: 2400 },
        { name: "Gestão e Comunicação Inicial", details: "20 horas x R$ 200,00/hora", cost: 4000 },
      ],
    },
    {
      category: "Design System & UX/UI",
      items: [
        { name: "Definição de Cores e Tipografia", details: "2 entregas", cost: 4400 },
        { name: "Design de Componentes e Insígnias", details: "10 componentes + 40 insígnias", cost: 12000 },
        { name: "Wireframing e Design de Páginas", details: "120 horas x R$ 180,00/hora", cost: 21600 },
        { name: "Prototipagem Interativa", details: "8 horas x R$ 125,00/hora", cost: 1000 },
      ],
    },
    {
      category: "Desenvolvimento",
      items: [
        { name: "Back-End (Estruturação e Lógica)", details: "90 horas", cost: 16200 },
        { name: "Implementação das Mecânicas", details: "Gamificação, Cursos, Freelas, Drafts", cost: 37800 },
        { name: "Módulos Críticos", details: "Pagamentos, Erros, Chat", cost: 18000 },
        { name: "Front-End (UI e Integração)", details: "Componentes, Páginas, API", cost: 77400 },
        { name: "QA e Testes", details: "Automatizados, Manuais, Segurança", cost: 21000 },
      ],
    },
    {
      category: "Infraestrutura",
      items: [{ name: "Ferramentas de Desenvolvimento", details: "Período de 3 meses", cost: 17769 }],
    },
  ],
  opex: [
    {
      category: "Recursos Humanos",
      items: [
        { name: "Project Owner / Design Lead", details: "Salário mensal (PJ)", monthly: 18000, annual: 216000 },
        { name: "Back-End Developer (x2)", details: "Salário mensal (PJ)", monthly: 34000, annual: 408000 },
        { name: "Front-End Developer", details: "Salário mensal (PJ)", monthly: 16000, annual: 192000 },
        { name: "Full Stack Developer / UI", details: "Salário mensal (PJ)", monthly: 17000, annual: 204000 },
        { name: "Project Manager", details: "Salário mensal (PJ)", monthly: 18000, annual: 216000 },
      ],
    },
    {
      category: "Infraestrutura e Licenças",
      items: [
        {
          name: "Hospedagem Cloud e Banco",
          details: "Servidores, CI/CD, banco de dados",
          monthly: 3975,
          annual: 47700,
        },
        { name: "Licenças de Software", details: "Figma, GitHub, etc.", monthly: 1948, annual: 23376 },
      ],
    },
    {
      category: "Custos Administrativos",
      items: [
        { name: "Assessoria Contábil e Jurídica", details: "Retainer mensal", monthly: 2500, annual: 30000 },
        { name: "Marketing e Aquisição", details: "Budget inicial", monthly: 3500, annual: 42000 },
      ],
    },
  ],
}

const scalabilityFactors = [
  {
    title: "Escalabilidade Técnica",
    description: "Arquitetura cloud-native permite crescimento horizontal automático",
    metrics: ["10x usuários simultâneos", "99.9% uptime garantido", "Latência < 200ms"],
    icon: "⚡",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Escalabilidade Financeira",
    description: "Modelo de receita sustentável com múltiplas fontes de monetização",
    metrics: ["3.5% taxa da plataforma", "Freelas desde R$ 25", "ROI positivo em 18 meses"],
    icon: "💰",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Escalabilidade Operacional",
    description: "Processos automatizados e equipe enxuta para crescimento eficiente",
    metrics: ["80% processos automatizados", "1:500 ratio suporte/usuário", "Onboarding em 24h"],
    icon: "🚀",
    color: "from-purple-500 to-purple-600",
  },
]

export default function ViabilitySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".viability-title", {
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

      gsap.from(".cost-section", {
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

      gsap.from(".scalability-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".scalability-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const totalCapex = costData.capex.reduce(
    (total, category) => total + category.items.reduce((catTotal, item) => catTotal + item.cost, 0),
    0,
  )

  const totalOpexMonthly = costData.opex.reduce(
    (total, category) => total + category.items.reduce((catTotal, item) => catTotal + (item.monthly || 0), 0),
    0,
  )

  const totalOpexAnnual = costData.opex.reduce(
    (total, category) => total + category.items.reduce((catTotal, item) => catTotal + (item.annual || 0), 0),
    0,
  )

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white relative" id="viabilidade">
      <BackgroundEffects variant="section" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle className="viability-title mb-12">Viabilidade e Escalabilidade</SectionTitle>

          <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Análise detalhada dos custos de construção, operação e estratégias de escalabilidade da plataforma Beeedu.
          </p>

          {/* Investment Summary */}
          <div className="cost-section grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#6699FF]/10 to-[#5588EE]/10 rounded-xl p-6 border border-[#6699FF]/20 text-center">
              <h3 className="text-lg font-bold text-[#2F4A60] mb-2">Investimento Inicial (CAPEX)</h3>
              <div className="text-3xl font-bold text-[#6699FF] mb-2">{formatCurrency(totalCapex)}</div>
              <p className="text-sm text-gray-600">Custo único de construção da plataforma</p>
            </div>
            <div className="bg-gradient-to-br from-[#22C55E]/10 to-[#16A34A]/10 rounded-xl p-6 border border-[#22C55E]/20 text-center">
              <h3 className="text-lg font-bold text-[#2F4A60] mb-2">Operação Mensal (OPEX)</h3>
              <div className="text-3xl font-bold text-[#22C55E] mb-2">{formatCurrency(totalOpexMonthly)}</div>
              <p className="text-sm text-gray-600">Custos recorrentes mensais</p>
            </div>
            <div className="bg-gradient-to-br from-[#FACC15]/10 to-[#F59E0B]/10 rounded-xl p-6 border border-[#FACC15]/20 text-center">
              <h3 className="text-lg font-bold text-[#2F4A60] mb-2">Investimento Total (Ano 1)</h3>
              <div className="text-3xl font-bold text-[#F59E0B] mb-2">
                {formatCurrency(totalCapex + totalOpexAnnual)}
              </div>
              <p className="text-sm text-gray-600">CAPEX + OPEX anual</p>
            </div>
          </div>

          {/* Detailed Cost Breakdown */}
          <div className="cost-section mb-16">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Detalhamento de Custos</h3>

            {/* CAPEX Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
              <div className="bg-[#6699FF] text-white p-4">
                <h4 className="text-lg font-bold">Custos de Construção (CAPEX)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-700">Categoria</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Item</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Detalhes</th>
                      <th className="text-right p-4 font-semibold text-gray-700">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costData.capex.map((category, catIndex) =>
                      category.items.map((item, itemIndex) => (
                        <tr key={`${catIndex}-${itemIndex}`} className="border-t border-gray-100">
                          <td className="p-4 text-sm font-medium text-gray-900">
                            {itemIndex === 0 ? category.category : ""}
                          </td>
                          <td className="p-4 text-sm text-gray-700">{item.name}</td>
                          <td className="p-4 text-sm text-gray-600">{item.details}</td>
                          <td className="p-4 text-sm font-semibold text-right text-gray-900">
                            {formatCurrency(item.cost)}
                          </td>
                        </tr>
                      )),
                    )}
                  </tbody>
                  <tfoot className="bg-[#6699FF]/10">
                    <tr>
                      <td colSpan={3} className="p-4 font-bold text-[#2F4A60]">
                        Total CAPEX
                      </td>
                      <td className="p-4 font-bold text-right text-[#6699FF]">{formatCurrency(totalCapex)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* OPEX Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#22C55E] text-white p-4">
                <h4 className="text-lg font-bold">Custos Operacionais (OPEX)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-700">Categoria</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Item</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Detalhes</th>
                      <th className="text-right p-4 font-semibold text-gray-700">Mensal</th>
                      <th className="text-right p-4 font-semibold text-gray-700">Anual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costData.opex.map((category, catIndex) =>
                      category.items.map((item, itemIndex) => (
                        <tr key={`${catIndex}-${itemIndex}`} className="border-t border-gray-100">
                          <td className="p-4 text-sm font-medium text-gray-900">
                            {itemIndex === 0 ? category.category : ""}
                          </td>
                          <td className="p-4 text-sm text-gray-700">{item.name}</td>
                          <td className="p-4 text-sm text-gray-600">{item.details}</td>
                          <td className="p-4 text-sm font-semibold text-right text-gray-900">
                            {item.monthly ? formatCurrency(item.monthly) : "-"}
                          </td>
                          <td className="p-4 text-sm font-semibold text-right text-gray-900">
                            {item.annual ? formatCurrency(item.annual) : "-"}
                          </td>
                        </tr>
                      )),
                    )}
                  </tbody>
                  <tfoot className="bg-[#22C55E]/10">
                    <tr>
                      <td colSpan={3} className="p-4 font-bold text-[#2F4A60]">
                        Total OPEX
                      </td>
                      <td className="p-4 font-bold text-right text-[#22C55E]">{formatCurrency(totalOpexMonthly)}</td>
                      <td className="p-4 font-bold text-right text-[#22C55E]">{formatCurrency(totalOpexAnnual)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* Scalability Factors */}
          <div className="scalability-grid">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-8 text-center">Fatores de Escalabilidade</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {scalabilityFactors.map((factor, index) => (
                <div
                  key={index}
                  className="scalability-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${factor.color} flex items-center justify-center text-2xl mb-4 shadow-md`}
                  >
                    {factor.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{factor.description}</p>
                  <ul className="space-y-2">
                    {factor.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <span className="text-[#22C55E] mr-2">✓</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Projection */}
          <div className="bg-gradient-to-r from-[#6699FF]/10 to-[#22C55E]/10 rounded-2xl p-8 border border-[#6699FF]/20">
            <h3 className="text-2xl font-bold text-[#2F4A60] mb-6 text-center">
              Projeção de Retorno sobre Investimento
            </h3>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#6699FF] mb-1">18 meses</div>
                <div className="text-sm text-gray-600">Break-even point</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#22C55E] mb-1">3.5%</div>
                <div className="text-sm text-gray-600">Taxa da plataforma</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#FACC15] mb-1">R$ 2.5M</div>
                <div className="text-sm text-gray-600">Receita projetada (Ano 3)</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#EF4444] mb-1">35%</div>
                <div className="text-sm text-gray-600">Margem líquida (Ano 3)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
