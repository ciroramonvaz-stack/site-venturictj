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
                { name: 'Ciro Ramon Vaz', role: 'Fundador & Operações' },
                { name: 'Eduardo Gabriel', role: 'Diretor Jurídico' },
                { name: 'Geliandra Lopes', role: 'Direito Ambiental' },
                { name: 'José Alaertes', role: 'Diretor Empresarial' },
              ].map((member, idx) => (
                <div key={idx} className="reveal flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-venturi-gold/40 to-venturi-dark/40 border-2 border-venturi-gold/50 flex items-center justify-center mb-4">
                    <span className="text-3xl">👤</span>
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
