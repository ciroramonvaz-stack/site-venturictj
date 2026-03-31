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
        <section className="section-wrap relative min-h-screen w-full flex items-center px-6 py-24 lg:py-0">
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

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            {/* Left side - Headlines */}
            <div className="reveal lg:w-1/2 text-center lg:text-left lg:pt-8">
              <div className="mb-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-venturi-gold/30 backdrop-blur-sm">
                <span className="text-xs font-medium text-venturi-gold">ESPECIALISTAS</span>
                <span className="text-xs text-white/70">Imóveis Rurais | Embargos | Sobreposição UC | Dívidas</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Seu imóvel rural está travado? A Venturi{' '}
                <span className="gradient-text">destrava</span>.
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Regularizamos, defendemos e destravamos propriedades rurais em todo o Brasil.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0 mb-6">
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

              <Link
                href="/solucoes/"
                className="border-2 border-venturi-gold text-venturi-gold font-bold py-3 px-8 rounded-lg hover:bg-venturi-gold/10 transition inline-flex items-center justify-center gap-2"
              >
                Ver Soluções →
              </Link>
            </div>

            {/* Right side - Lead Capture Form */}
            <div className="reveal lg:w-5/12 w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-venturi-dark/90 backdrop-blur-md border border-venturi-gold/30 rounded-2xl p-6 lg:p-8 shadow-2xl">
                {/* Form header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-venturi-gold/20 text-venturi-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    ATENDIMENTO IMEDIATO
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Análise Gratuita
                  </h2>
                  <p className="text-white/60 text-sm">
                    Descubra a solução para seu imóvel em até 2h
                  </p>
                </div>

                {/* Form fields */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold focus:bg-white/15 transition"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp (00) 00000-0000"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold focus:bg-white/15 transition"
                    />
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-venturi-gold transition"
                    >
                      <option value="">Qual o problema do imóvel?</option>
                      <option value="sobreposto">Sobreposto com UC</option>
                      <option value="embargado">Embargado (ICMBio/IBAMA/IAT)</option>
                      <option value="documentacao">Documentação / SIGEF</option>
                      <option value="divida">Dívida rural com banco</option>
                      <option value="leilao">Fazenda indo a leilão</option>
                      <option value="carbono">Créditos de carbono</option>
                      <option value="due-diligence">Due diligence / Compra</option>
                      <option value="outro">Outro problema</option>
                    </select>
                  </div>

                  <a
                    href={`${company.whatsappLink}?text=${encodeURIComponent('Olá Venturi! Gostaria de uma análise gratuita do meu imóvel rural.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow w-full bg-venturi-gold text-venturi-dark font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition text-lg"
                  >
                    Solicitar Análise Gratuita →
                  </a>
                </form>

                {/* Social proof */}
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {['/ciro.jpg.jpeg', '/eduardo.jpg.jpeg', '/geliandra.jpg.jpeg'].map((img, idx) => (
                        <div key={idx} className="w-7 h-7 rounded-full border-2 border-venturi-dark overflow-hidden">
                          <Image src={img} alt="Especialista" width={28} height={28} className="object-cover w-full h-full" />
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs">
                      <span className="text-venturi-gold font-bold">150+</span> proprietários atendidos
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Gratuito
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Sem compromisso
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Sigilo total
                    </span>
                  </div>
                </div>
              </div>
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

        {/* ============ FINAL CTA ============ */}
        <section className="section-wrap py-20 bg-gradient-to-r from-venturi-gold/10 to-venturi-dark/50 border-t border-venturi-gold/20">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Pronto para destravar seu imóvel?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Análise gratuita e sem compromisso. Retorno em até 2 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato/"
                className="btn-glow bg-venturi-gold text-venturi-dark font-bold py-4 px-12 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-opacity-90 transition"
              >
                Solicitar Análise Gratuita →
              </Link>
              <Link
                href="/contato/"
                className="border-2 border-venturi-gold text-venturi-gold font-bold py-4 px-12 rounded-lg hover:bg-venturi-gold/10 transition inline-flex items-center justify-center gap-2"
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
