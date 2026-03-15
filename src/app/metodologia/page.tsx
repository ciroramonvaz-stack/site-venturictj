import Link from 'next/link';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';

export const metadata: Metadata = getPageMetadata({
  title: 'Metodologia | VENTURI',
  description: 'Conheça a metodologia Venturi em 5 etapas. Processo comprovado para diagnóstico e solução de questões fundiárias e ambientais.',
  ogImage: '/og-image-metodologia.jpg',
});

export default function MetodologiaPage() {
  const { methodology, deliverables, company } = siteData;

  const tools = [
    {
      name: 'SIGEF/INCRA',
      description:
        'Sistema de Gestão Fundiária e base de cadastro nacional de propriedades rurais',
    },
    {
      name: 'SICAR',
      description:
        'Sistema de Cadastro Ambiental Rural - informações de restrições ambientais',
    },
    {
      name: 'ICMBio/MMA',
      description:
        'Banco de dados de Unidades de Conservação federais e restrições ambientais',
    },
    {
      name: 'IAT-PR',
      description:
        'Instituto de Águas do Paraná - restrições ambientais e APPs estaduais',
    },
    {
      name: 'Cartórios de Registro',
      description: 'Pesquisa de documentação e histórico registral de imóveis',
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black border-b border-white/10">
        <div className="section-wrap">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Metodologia Venturi
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Processo comprovado em 5 etapas para diagnosticar, analisar e resolver os desafios do seu imóvel rural com segurança técnica e jurídica.
            </p>
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGY TIMELINE (VERTICAL) ===== */}
      {methodology && methodology.length > 0 && (
        <section className="py-24 bg-black border-b border-white/10">
          <div className="section-wrap max-w-4xl">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">PROCESSO EM 5 ETAPAS</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                O Caminho Comprovado para a Solução
              </h2>
            </div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-venturi-gold via-venturi-gold/50 to-transparent" />

              {/* Steps */}
              <div className="space-y-12">
                {methodology.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Step Number Circle */}
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-venturi-gold relative z-10">
                          <span className="font-serif text-2xl font-bold text-venturi-gold">
                            {step.step}
                          </span>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow pt-2">
                        <h3 className="font-serif text-2xl font-bold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                          {step.description}
                        </p>

                        {/* Additional Details for Key Steps */}
                        {step.step === 1 && (
                          <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-white/60 text-sm">
                              Solicitamos documentação registral, ambiental e fiscal. Você envia remotamente via email ou plataforma segura.
                            </p>
                          </div>
                        )}

                        {step.step === 3 && (
                          <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-white/60 text-sm">
                              Relatório completo com mapeamento de riscos, análise de sobreposições e recomendações técnico-jurídicas fundamentadas.
                            </p>
                          </div>
                        )}

                        {step.step === 5 && (
                          <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-white/60 text-sm">
                              Acompanhamos a execução das soluções propostas, fornecendo suporte técnico e jurídico contínuo.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== DELIVERABLES SECTION ===== */}
      {deliverables && deliverables.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">ENTREGAS</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                O que você recebe em cada diagnóstico
              </h2>
              <p className="text-white/70 max-w-2xl">
                Documentação profissional, organizados e prontos para apresentação em órgãos públicos ou instituições financeiras.
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((deliverable, index) => (
                <div
                  key={deliverable.id}
                  className="group rounded-lg bg-white/5 border border-white/10 p-8 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-venturi-gold/20 border border-venturi-gold mb-4">
                    <span className="font-semibold text-venturi-gold text-sm">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                    {deliverable.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {deliverable.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TOOLS & DATABASES SECTION ===== */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="section-wrap">
          {/* Section Header */}
          <div className="mb-16">
            <div className="gold-kicker mb-4">RECURSOS</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Ferramentas e Bases de Dados
            </h2>
            <p className="text-white/70 max-w-2xl">
              Consultamos as principais bases de dados oficiais para fornecer análise completa e atualizada.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-6 hover:border-venturi-gold/50 hover:from-white/15 hover:to-white/10 transition-all duration-300"
              >
                {/* Tool Name */}
                <h4 className="font-semibold text-white mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                  {tool.name}
                </h4>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '📋',
                title: 'Documentação Profissional',
                description:
                  'Relatórios técnico-jurídicos completos, aprovados por instituições financeiras e órgãos públicos.',
              },
              {
                icon: '🗺️',
                title: 'Análise Cartográfica',
                description:
                  'Mapas detalhados mostrando sobreposições, restrições e limites registrais com precisão.',
              },
              {
                icon: '⚖️',
                title: 'Fundamentação Jurídica',
                description:
                  'Pareceres jurídicos com base em legislação federal, estadual e jurisprudência.',
              },
              {
                icon: '🤝',
                title: 'Suporte Contínuo',
                description:
                  'Acompanhamento técnico na implementação das soluções recomendadas.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/5 border border-white/10 p-8 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-semibold text-lg mb-3">{benefit.title}</h4>
                <p className="text-white/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="section-wrap text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Entre em contato para discutir sua situação e receber uma proposta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de conhecer mais sobre a metodologia da Venturi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              📱 Fale no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-venturi-gold text-venturi-gold font-semibold rounded-lg hover:bg-venturi-gold/10 transition-colors duration-300"
            >
              Solicitar Consultoria
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULING CTA SECTION ===== */}
      <SchedulingCTA />
    </main>
  );
}
