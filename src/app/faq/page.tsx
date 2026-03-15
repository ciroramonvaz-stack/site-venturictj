'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';

export default function FAQPage() {
  const { faq, company } = siteData;

  // Track which FAQ items are open
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle FAQ item
  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black border-b border-white/10">
        <div className="section-wrap">
          <div className="max-w-3xl">
            {/* Kicker */}
            <div className="gold-kicker mb-6">Dúvidas?</div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Perguntas Frequentes
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              As respostas para as dúvidas mais comuns sobre nossa metodologia, serviços e processo de trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      {faq && faq.length > 0 && (
        <section className="py-24 bg-black border-b border-white/10">
          <div className="section-wrap max-w-4xl">
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                {faq.length} Respostas Importantes
              </h2>
              <p className="text-white/70 text-lg">
                Não encontrou sua pergunta? Entre em contato conosco diretamente.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faq.map((item, index) => {
                const isOpen = openItems.includes(index);

                return (
                  <div
                    key={index}
                    className="group rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden hover:border-venturi-gold/50 transition-all duration-300"
                  >
                    {/* Question / Header */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/10 transition-colors duration-300"
                    >
                      <h3 className="font-semibold text-lg text-white/90 group-hover:text-venturi-gold transition-colors duration-300 flex-grow">
                        {item.question}
                      </h3>
                      <span
                        className={`text-venturi-gold flex-shrink-0 ml-4 text-xl transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="px-8 pb-6 border-t border-white/10 bg-white/5">
                        <p className="text-white/70 leading-relaxed text-base">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <h3 className="font-semibold text-lg mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-white/70 mb-6">
                Nossa equipe está pronta para responder suas perguntas específicas sobre sua propriedade e situação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os serviços da Venturi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  💬 Enviar WhatsApp
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-6 py-3 border border-venturi-gold text-venturi-gold font-semibold rounded-lg hover:bg-venturi-gold/10 transition-colors duration-300"
                >
                  Formulário de Contato
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== TOPICS SECTION ===== */}
      <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
            Tópicos Cobertos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏢',
                title: 'Sobre a Venturi',
                count: 2,
              },
              {
                icon: '💼',
                title: 'Serviços e Processos',
                count: 2,
              },
              {
                icon: '💰',
                title: 'Preços e Condições',
                count: 2,
              },
              {
                icon: '📍',
                title: 'Cobertura Geográfica',
                count: 1,
              },
              {
                icon: '⏱️',
                title: 'Prazos e Entrega',
                count: 1,
              },
              {
                icon: '🛠️',
                title: 'Ferramentas e Especialidades',
                count: 2,
              },
            ].map((topic, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/5 border border-white/10 p-6 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{topic.icon}</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {topic.title}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {topic.count} pergunta{topic.count > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES HIGHLIGHTS SECTION ===== */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
            O que oferecemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Diagnóstico Completo',
                items: [
                  'Análise de restrições fundiárias',
                  'Mapeamento de sobreposições',
                  'Parecer jurídico fundamentado',
                  'Dossiê administrativo',
                ],
              },
              {
                title: 'Especialidades',
                items: [
                  'Regularização SIGEF/INCRA',
                  'Defesa de embargos ICMBio',
                  'Restrições ambientais',
                  'Contestações administrativas',
                ],
              },
              {
                title: 'Diferenciais',
                items: [
                  'Trabalho 100% remoto',
                  'Atendimento em 8+ estados',
                  'Resposta em 24h',
                  'Profissionais especializados',
                ],
              },
              {
                title: 'Suporte',
                items: [
                  'Diagnóstico inicial gratuito',
                  'Acompanhamento técnico',
                  'Sigilo profissional garantido',
                  'Comunicação clara',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="rounded-lg bg-white/5 border border-white/10 p-8">
                <h4 className="font-semibold text-lg text-venturi-gold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="text-venturi-gold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEXT STEPS SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 border-b border-white/10">
        <div className="section-wrap text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Agende uma conversa inicial com nossa equipe. Diagnóstico preliminar sem comprometimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de solicitar um diagnóstico.')}`}
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
              Enviar Mensagem
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULING CTA SECTION ===== */}
      <SchedulingCTA />
    </main>
  );
}
