import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/content/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'VENTURI CTJ | Consultoria para Imóveis Rurais',
  description:
    'Regularizamos, defendemos e destravamos propriedades rurais em todo o Brasil. Análise gratuita.',
};

export default function HomePage() {
  const { company, heroImages, stats, testimonials } = siteData;

  return (
    <>
      <ScrollReveal />
      <main className="relative w-full overflow-hidden bg-venturi-dark text-white">
        {/* ============ HERO SECTION ============ */}
        <section className="section-wrap relative min-h-screen w-full flex items-center justify-center px-6 py-20 lg:py-0">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImages[0]}
              alt="Rural property background"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0 bg-black/60" />
          </div>

          <div className="reveal relative z-10 max-w-3xl text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-venturi-gold/30 backdrop-blur-sm">
              <span className="text-xs font-medium text-venturi-gold">ESPECIALISTAS</span>
              <span className="text-xs text-white/70">Imóveis Rurais | Embargos | Sobreposição UC | Dívidas</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seu imóvel rural está travado? A Venturi{' '}
              <span className="gradient-text">destrava</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Regularizamos, defendemos e destravamos propriedades rurais em todo o Brasil.{' '}
              <span className="text-venturi-gold font-semibold">Análise gratuita.</span>
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm mx-auto lg:mx-0">
              {[
                '✓ Análise gratuita',
                '✓ Retorno em até 2h',
                '✓ 100% remoto',
                '✓ 8 estados',
              ].map((badge, idx) => (
                <div key={idx} className="text-sm text-venturi-gold">
                  {badge}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`${company.whatsappLink}?text=${encodeURIComponent('Olá Venturi, quero uma análise gratuita do meu imóvel rural')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow bg-venturi-gold text-venturi-dark font-bold py-4 px-8 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-opacity-90 transition"
              >
                💬 WhatsApp
              </a>
              <Link
                href="/solucoes/"
                className="border-2 border-venturi-gold text-venturi-gold font-bold py-4 px-8 rounded-lg hover:bg-venturi-gold/10 transition inline-flex items-center justify-center gap-2"
              >
                Ver Soluções →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ STATS BAR ============ */}
        <section className="section-wrap bg-[#050810] border-b border-white/5 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats?.map((stat, idx) => (
              <div key={idx} className="reveal">
                <div className="text-4xl lg:text-5xl font-bold text-venturi-gold mb-2">
                  {stat.number}
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ SOLUÇÕES PREVIEW ============ */}
        <section className="section-wrap py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <span className="gold-kicker">Nossas Soluções</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">
              Expertise completa para{' '}
              <span className="gradient-text">cada problema</span> do seu imóvel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: '🏛️', title: 'Sobreposição com UC' },
                { icon: '⚖️', title: 'Embargos e Multas' },
                { icon: '💰', title: 'Dívidas Rurais' },
                { icon: '🌱', title: 'Créditos de Carbono' },
              ].map((solution, idx) => (
                <div
                  key={idx}
                  className="reveal premium-card bg-white/5 border border-venturi-gold/20 p-6 rounded-xl hover:border-venturi-gold/50 hover:bg-white/10 transition duration-300"
                >
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                </div>
              ))}
            </div>

            <Link
              href="/solucoes/"
              className="text-venturi-gold font-bold text-lg hover:gap-4 inline-flex items-center gap-2 transition"
            >
              Ver todas as soluções →
            </Link>
          </div>
        </section>

        {/* ============ RESULTADOS PREVIEW ============ */}
        <section className="section-wrap py-20 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <span className="gold-kicker">Resultados Comprovados</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">
              Casos reais, resultados{' '}
              <span className="gradient-text">mensuráveis</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {testimonials?.slice(0, 2).map((testimonial, idx) => (
                <div
                  key={idx}
                  className="reveal premium-card bg-white/5 border border-venturi-gold/20 p-8 rounded-xl hover:border-venturi-gold/50 transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-venturi-gold bg-venturi-gold/20 px-3 py-1 rounded-full">
                      {testimonial.area}
                    </span>
                  </div>
                  <p className="text-white/80 italic mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-xs text-white/50">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-venturi-gold">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/resultados/"
              className="text-venturi-gold font-bold text-lg hover:gap-4 inline-flex items-center gap-2 transition"
            >
              Ver todos os resultados →
            </Link>
          </div>
        </section>

        {/* ============ QUEM SOMOS PREVIEW ============ */}
        <section className="section-wrap py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <span className="gold-kicker">O Time</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">
              4 especialistas, mais de{' '}
              <span className="gradient-text">900 processos</span>
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start gap-12 mb-12">
              {[
                { name: 'Ciro Ramon Vaz', role: 'Fundador & Operações', image: '/ciro.jpg.jpeg' },
                { name: 'Eduardo Gabriel', role: 'Diretor Jurídico', image: '/eduardo.jpg.jpeg' },
                { name: 'Geliandra Lopes', role: 'Direito Ambiental', image: '/geliandra.jpg.jpeg' },
                { name: 'José Alaertes', role: 'Diretor Empresarial', image: '/jose.jpg.jpeg' },
              ].map((member, idx) => (
                <div key={idx} className="reveal flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-2 border-venturi-gold/50 overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="font-bold text-white text-center">{member.name}</p>
                  <p className="text-xs text-venturi-gold">{member.role}</p>
                </div>
              ))}
            </div>

            <Link
              href="/sobre/"
              className="text-venturi-gold font-bold text-lg hover:gap-4 inline-flex items-center gap-2 transition"
            >
              Conheça o time →
            </Link>
          </div>
        </section>

        {/* ============ LEAD CAPTURE ============ */}
        <section className="section-wrap py-20 bg-gradient-to-b from-venturi-dark to-[#0a0f1a]">
          <div className="max-w-4xl mx-auto">
            <div className="reveal premium-card bg-white/5 border border-venturi-gold/30 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <span className="gold-kicker">Análise Gratuita</span>
                <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">
                  Seu imóvel rural tem <span className="gradient-text">solução</span>?
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  Preencha abaixo e descubra em até 2 horas. Sem compromisso, sem custo inicial.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="lead-nome" className="block text-sm font-medium text-venturi-gold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="lead-nome"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 bg-venturi-dark/80 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition"
                  />
                </div>
                <div>
                  <label htmlFor="lead-telefone" className="block text-sm font-medium text-venturi-gold mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="lead-telefone"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 bg-venturi-dark/80 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="lead-situacao" className="block text-sm font-medium text-venturi-gold mb-2">
                    Situação do imóvel
                  </label>
                  <select
                    id="lead-situacao"
                    className="w-full px-4 py-3 bg-venturi-dark/80 border border-white/20 rounded-lg text-white focus:outline-none focus:border-venturi-gold transition"
                  >
                    <option value="">Selecione o problema principal</option>
                    <option value="sobreposto">Sobreposto com Unidade de Conservação</option>
                    <option value="embargado">Embargado por órgão ambiental</option>
                    <option value="documentacao">Problema de documentação / SIGEF</option>
                    <option value="divida">Dívida rural com banco</option>
                    <option value="carbono">Créditos de carbono</option>
                    <option value="due-diligence">Due diligence / Compra</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </form>

              <div className="text-center">
                <a
                  href={`${company.whatsappLink}?text=${encodeURIComponent('Olá Venturi! Gostaria de uma análise gratuita do meu imóvel rural.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow bg-venturi-gold text-venturi-dark font-bold py-4 px-12 rounded-lg inline-flex items-center justify-center gap-3 hover:bg-opacity-90 transition text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar Análise Gratuita
                </a>
                <p className="text-white/40 text-sm mt-4">Seus dados estão protegidos. Retorno em até 2h.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="section-wrap py-20 bg-gradient-to-r from-venturi-gold/10 to-venturi-dark/50 border-t border-venturi-gold/20">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Pronto para destravar seu imóvel?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Análise gratuita e sem compromisso. Retorno em até 2 horas.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <a
                href={`${company.whatsappLink}?text=${encodeURIComponent('Olá Venturi, quero uma análise gratuita do meu imóvel rural')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow bg-venturi-gold text-venturi-dark font-bold py-4 px-12 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-opacity-90 transition"
              >
                💬 Enviar WhatsApp
              </a>
              <Link
                href="/contato/"
                className="border-2 border-venturi-gold text-venturi-gold font-bold py-4 px-12 rounded-lg hover:bg-venturi-gold/10 transition inline-flex items-center justify-center gap-2"
              >
                Ir para Contato →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
