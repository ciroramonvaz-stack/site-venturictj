import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/content/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Soluções para Imóveis Rurais | Venturi CTJ',
  description: 'Tudo o que seu imóvel rural precisa em um só lugar. Regularização fundiária, proteção patrimonial, créditos de carbono e muito mais.',
  openGraph: {
    title: 'Soluções para Imóveis Rurais | Venturi CTJ',
    description: 'Consultoria jurídica completa para propriedades rurais. De regularização a oportunidades de receita.',
    type: 'website',
  },
};

export default function SolucoesPage() {
  const services = [
    {
      category: 'Sobreposição e Áreas Protegidas',
      icon: '🏛️',
      title: 'Sobreposição com Unidades de Conservação',
      description: 'Seu imóvel está dentro ou no limite de parque, reserva ou APA? Analisamos a situação e destravamos os direitos sobre a propriedade.',
    },
    {
      category: 'Sobreposição e Áreas Protegidas',
      icon: '🌊',
      title: 'Zona de Amortecimento',
      description: 'Restrições de uso em áreas próximas a unidades de conservação. Analisamos seus direitos e explorar possibilidades legais.',
    },
    {
      category: 'Sobreposição e Áreas Protegidas',
      icon: '🗺️',
      title: 'Conflito de Limites com Terra Indígena ou Quilombola',
      description: 'Sobreposição total ou parcial com TI ou território quilombola. Estratégia clara para proteger sua propriedade.',
    },
    {
      category: 'Regularização Fundiária e Documental',
      icon: '📐',
      title: 'Certificação INCRA/SIGEF',
      description: 'Sem SIGEF não vende, não financia. Certificamos sua propriedade no sistema oficial do INCRA.',
    },
    {
      category: 'Regularização Fundiária e Documental',
      icon: '📋',
      title: 'Regularização de CAR',
      description: 'Inconsistências, sobreposições ou dados errados no CAR? Corrigimos e regularizamos seu cadastro ambiental.',
    },
    {
      category: 'Regularização Fundiária e Documental',
      icon: '📄',
      title: 'Retificação de Matrícula e Cadeia Dominial',
      description: 'Erros na escritura, cadeia dominial quebrada ou informações inconsistentes? Limpamos a documentação.',
    },
    {
      category: 'Regularização Fundiária e Documental',
      icon: '🏡',
      title: 'Usucapião Rural',
      description: 'Posse antiga sem documentação? Transformamos sua ocupação em propriedade legal através da usucapião.',
    },
    {
      category: 'Defesa Ambiental e Administrativa',
      icon: '⚠️',
      title: 'Defesa contra Embargos',
      description: 'Embargo ativo do ICMBio, IBAMA ou IAT? Defesa administrativa para reverter a decisão e resgatar o uso da propriedade.',
    },
    {
      category: 'Defesa Ambiental e Administrativa',
      icon: '⚖️',
      title: 'Multas e Autuações Ambientais',
      description: 'Recursos contra autos de infração em todas as esferas. Reduzimos multas e negociamos com órgãos ambientais.',
    },
    {
      category: 'Defesa Ambiental e Administrativa',
      icon: '📝',
      title: 'Licenciamento Ambiental',
      description: 'Orientação prática para obter ou renovar licenças de operação. Cumprimento normativo sem burocracias desnecessárias.',
    },
    {
      category: 'Proteção Patrimonial',
      icon: '💰',
      title: 'Dívidas Rurais',
      description: 'Banco cobrando juros abusivos? Renegociamos, reduzimos e defendemos seu patrimônio contra cobranças indevidas.',
      link: '/dividas-rurais/',
    },
    {
      category: 'Proteção Patrimonial',
      icon: '🏠',
      title: 'Suspensão de Leilão',
      description: 'Fazenda indo a leilão? Ação judicial urgente para suspender e preservar seu imóvel. Resolutivo em 48 horas.',
    },
    {
      category: 'Proteção Patrimonial',
      icon: '📊',
      title: 'Due Diligence Rural',
      description: 'Planejando comprar uma fazenda? Raio-X jurídico e ambiental completo antes de fechar negócio.',
    },
    {
      category: 'Novas Oportunidades',
      icon: '🌱',
      title: 'Créditos de Carbono',
      description: 'Monetize a preservação da sua propriedade com segurança jurídica. Acesso a mercados de créditos voluntários.',
      link: '/carbono/',
    },
    {
      category: 'Novas Oportunidades',
      icon: '📑',
      title: 'Contratos Agrários',
      description: 'Arrendamento, parceria rural, comodato. Contratos atualizados que protegem seus interesses legais.',
    },
    {
      category: 'Novas Oportunidades',
      icon: '🔄',
      title: 'Inventário e Partilha Rural',
      description: 'Herança com terra? Conduzimos inventário judicial ou extrajudicial com segurança e transparência.',
    },
  ];

  const groupedServices = services.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const categories = [
    'Sobreposição e Áreas Protegidas',
    'Regularização Fundiária e Documental',
    'Defesa Ambiental e Administrativa',
    'Proteção Patrimonial',
    'Novas Oportunidades',
  ];

  const methodology = [
    { step: 1, title: 'Conversa Inicial Gratuita', desc: 'Entendemos sua situação sem compromisso.' },
    { step: 2, title: 'Levantamento Técnico', desc: 'Análise profunda de documentos e registros.' },
    { step: 3, title: 'Diagnóstico Claro', desc: 'Explicamos o que encontramos em linguagem simples.' },
    { step: 4, title: 'Estratégia Customizada', desc: 'Plano de ação prático e viável para sua propriedade.' },
    { step: 5, title: 'Execução e Acompanhamento', desc: 'Implementamos a solução e acompanhamos até o final.' },
  ];

  return (
    <>
    <ScrollReveal />
    <main className="bg-venturi-dark text-white">
      {/* HERO */}
      <section className="section-wrap min-h-[600px] bg-gradient-to-br from-venturi-dark via-black to-venturi-dark flex flex-col justify-center items-center text-center py-20 px-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-venturi-gold/10 border border-venturi-gold/30 rounded-full text-venturi-gold text-sm font-semibold tracking-wide">
            NOSSAS SOLUÇÕES
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal">
          Tudo o que seu imóvel rural precisa.{' '}
          <span className="gradient-text">Em um só lugar.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl reveal stagger-1">
          Sobreposição com áreas protegidas? Documentação confusa? Multa ambiental? Dívidas? Oportunidade de renda?
          Temos expertise jurídica e ambiental para cada desafio do seu rural.
        </p>
      </section>

      {/* SERVICES GRID */}
      {categories.map((category, categoryIdx) => (
        <section key={category} className="section-wrap py-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 gold-kicker">
              {category}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-venturi-gold to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedServices[category]?.map((service, idx) => (
              <div
                key={`${category}-${idx}`}
                className="premium-card group cursor-pointer reveal"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-venturi-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-venturi-gold hover:text-white transition-colors duration-300 text-sm font-semibold group/link"
                    >
                      Saiba mais
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* METHODOLOGY */}
      <section className="section-wrap py-16 border-t border-venturi-gold/10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gold-kicker">
            Como Trabalhamos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-venturi-gold to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {methodology.map((item, idx) => (
            <div key={idx} className="relative reveal" style={{ animationDelay: `${idx * 80}ms` }}>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-venturi-gold to-venturi-gold/70 flex items-center justify-center font-bold text-venturi-dark text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>

                {idx < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-venturi-gold/50 to-transparent"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-wrap py-20 bg-gradient-to-r from-venturi-gold/5 via-transparent to-venturi-gold/5 border-y border-venturi-gold/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não sabe por onde começar?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            A análise inicial é gratuita. Conversamos sobre sua situação, sem compromisso,
            e você sabe exatamente o que precisa fazer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de agendar uma conversa gratuita sobre minhas dúvidas com meu imóvel rural.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-venturi-gold text-venturi-dark font-bold rounded-lg hover:bg-white transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              <span>💬 Fale no WhatsApp</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>

            <Link
              href="/contato/"
              className="px-8 py-4 border-2 border-venturi-gold text-venturi-gold font-bold rounded-lg hover:bg-venturi-gold hover:text-venturi-dark transition-all duration-300"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
