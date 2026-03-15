import Link from 'next/link';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';

export const metadata: Metadata = getPageMetadata({
  title: 'Sobre | VENTURI',
  description: 'Conheça a Venturi CTJ. Especialistas em consultoria técnica jurídica para propriedades rurais no Brasil.',
  ogImage: '/og-image-sobre.jpg',
});

export default function SobrePage() {
  const { company, stats } = siteData;

  return (
    <main className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black border-b border-white/10">
        <div className="section-wrap">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Sobre a Venturi
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Consultoria especializada que destrava propriedades rurais através de análise técnica rigorosa, fundamentação jurídica sólida e comunicação clara.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Mission Statement */}
            <div>
              <div className="gold-kicker mb-6">NOSSA MISSÃO</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                {company.mission}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Acreditamos que a burocracia e a complexidade regulatória não devem ser obstáculos para o sucesso do agronegócio brasileiro. Nosso trabalho transforma incerteza em clareza, bloqueios em oportunidades.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-venturi-gold flex-shrink-0">✓</span>
                  <span className="text-white/70">100% focado em soluções aplicáveis</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-venturi-gold flex-shrink-0">✓</span>
                  <span className="text-white/70">Sem jargão complexo ou promessas vazias</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-venturi-gold flex-shrink-0">✓</span>
                  <span className="text-white/70">Atendimento 100% remoto em todo o Brasil</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Element / Stats */}
            <div className="rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 md:p-12">
              <h3 className="font-semibold text-venturi-gold mb-8 text-lg">
                Números que falam por nós
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                    <div className="text-4xl font-bold text-venturi-gold mb-2">
                      {stat.number}
                    </div>
                    <p className="text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO SECTION ===== */}
      <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <div className="gold-kicker mb-6">O QUE FAZEMOS</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">
            Interseção entre três disciplinas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '⚖️',
                title: 'Direito Ambiental',
                description:
                  'Análise de restrições ambientais federais e estaduais, Unidades de Conservação, APPs e compliance com legislação ambiental.',
              },
              {
                icon: '📋',
                title: 'Direito Registral',
                description:
                  'Pesquisa de documentação, análise de conformidade registral, SNCR e SIGEF, com fundamento em legislação fundiária.',
              },
              {
                icon: '🗺️',
                title: 'Gestão Territorial',
                description:
                  'Mapeamento de limites, sobreposições, restrições de uso e potencial agronômico da propriedade.',
              },
            ].map((discipline, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/5 border border-white/10 p-8 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{discipline.icon}</div>
                <h4 className="font-semibold text-lg mb-3">{discipline.title}</h4>
                <p className="text-white/60 leading-relaxed">
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/70 text-lg leading-relaxed">
            {company.whatWeDo}
          </p>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="section-wrap">
          <div className="gold-kicker mb-6">NOSSOS VALORES</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">
            O que nos guia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((value, index) => (
              <div
                key={index}
                className="group rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 hover:border-venturi-gold/50 hover:from-white/15 hover:to-white/10 transition-all duration-300"
              >
                {/* Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-venturi-gold/20 border border-venturi-gold mb-6">
                  <span className="font-semibold text-venturi-gold">
                    {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-semibold text-lg mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <div className="rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-12">
            <h2 className="font-serif text-4xl font-bold mb-8">
              Localização e Atendimento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Headquarters */}
              <div>
                <h4 className="font-semibold text-venturi-gold mb-3">
                  Matriz
                </h4>
                <p className="text-white/80 text-lg mb-2">{company.address}</p>
                <p className="text-white/60">
                  Ponta Grossa, Paraná - Brasil
                </p>
              </div>

              {/* Service Area */}
              <div>
                <h4 className="font-semibold text-venturi-gold mb-3">
                  Atendimento
                </h4>
                <p className="text-white/80 text-lg">
                  Toda a República Federativa do Brasil
                </p>
                <p className="text-white/60 mt-2">
                  Trabalho 100% remoto, com análise de bases de dados federais e estaduais.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              {[
                {
                  label: 'Email',
                  value: company.email,
                  href: `mailto:${company.email}`,
                },
                {
                  label: 'WhatsApp',
                  value: company.whatsapp,
                  href: company.whatsappLink,
                },
                {
                  label: 'Instagram',
                  value: company.instagram,
                  href: `https://instagram.com/${company.instagram.replace('@', '')}`,
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg bg-white/5 border border-white/10 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-white/60 text-sm mb-2">{item.label}</p>
                  <p className="font-semibold text-venturi-gold group-hover:text-yellow-400 transition-colors duration-300">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="section-wrap max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Equipe Especializada
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-12">
            Somos um time de profissionais com expertise complementar em direito ambiental, direito de propriedade, regularização fundiária e gestão territorial. Cada consultor traz experiência prática em diagnósticos e resolução de casos complexos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Formação Sólida',
                description:
                  'Especialização em direito ambiental, fundiário e administração de propriedades rurais.',
              },
              {
                icon: '⚡',
                title: 'Prática Comprovada',
                description:
                  'Experiência real em diagnósticos, defesa administrativa e regularização.',
              },
              {
                icon: '🤝',
                title: 'Network Institucional',
                description:
                  'Relacionamento com órgãos públicos (INCRA, ICMBio, IAT-PR, cartórios).',
              },
              {
                icon: '🔄',
                title: 'Atualização Contínua',
                description:
                  'Acompanhamento de mudanças legislativas e jurisprudência ambiental.',
              },
            ].map((aspect, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/5 border border-white/10 p-8"
              >
                <div className="text-4xl mb-4">{aspect.icon}</div>
                <h4 className="font-semibold text-lg mb-3">{aspect.title}</h4>
                <p className="text-white/60 leading-relaxed">
                  {aspect.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 border-b border-white/10">
        <div className="section-wrap text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Conheça nosso trabalho
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Agende uma conversa inicial sem compromisso para entender sua situação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de conhecer mais sobre a Venturi e seus serviços.')}`}
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
