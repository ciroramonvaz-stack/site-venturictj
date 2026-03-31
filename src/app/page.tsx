import Image from 'next/image';
import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';
import ScrollReveal from '@/components/ScrollReveal';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata = getPageMetadata('Home | VENTURI');

export default function HomePage() {
  const {
    company,
    heroImages,
    solutions,
    products,
    methodology,
    testimonials,
    faq,
    stats,
  } = siteData;

  return (
    <>
      <ScrollReveal />
      <main className="bg-black text-white">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {heroImages && heroImages[0] && (
            <Image
              src={heroImages[0]}
              alt="Propriedade rural"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          )}
          <div className="hero-overlay absolute inset-0" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

          <div className="section-wrap relative z-10 py-32 md:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Coluna esquerda - Conteúdo */}
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-venturi-gold pulse-gold" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Imóvel embargado, sobreposto com UC ou com CAR irregular? A Venturi destrava.
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-8">
                  Destravar{' '}
                  <span className="gradient-text">propriedades embargadas</span>{' '}
                  é nossa especialidade
                </h1>

                {/* Subtitle - SHORTENED to max 2 lines */}
                <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
                  Resolvemos embargos, regularizamos documentos e defendemos contra cobranças abusivas — para que você volte a produzir com segurança.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Análise gratuita
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Retorno em até 2h
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    100% remoto
                  </div>
                </div>

                {/* CTAs mobile */}
                <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                  <a
                    href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria Venturi.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-700" />
                    WhatsApp: Análise Gratuita
                  </a>
                  <Link
                    href="/diagnostico"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm tracking-wide"
                  >
                    Diagnóstico Gratuito →
                  </Link>
                </div>
              </div>

              {/* Coluna direita - Formulário de captação */}
              <div className="hidden lg:flex justify-end">
                <LeadCaptureForm />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* ===== TRUST BAR ===== */}
        {stats && stats.length > 0 && (
          <section className="py-20 border-b border-white/5 bg-[#050810]">
            <div className="section-wrap">
              <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-serif">
                      {stat.number}
                    </div>
                    <p className="text-white/40 text-sm font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== COMO PODEMOS AJUDAR (MERGED Solutions) ===== */}
        {solutions && solutions.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20">
                <div className="gold-kicker mb-4">Nossas Soluções</div>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
                    Como Podemos{' '}
                    <span className="gradient-text">Ajudar</span>
                  </h2>
                  <Link
                    href="/solucoes"
                    className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors shrink-0"
                  >
                    Ver todas →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
                {solutions.map((solution, index) => (
                  <Link
                    href={solution.id === 'dividas-rurais' ? '/dividas-rurais/' : `/solucoes/#${solution.id}`}
                    key={index}
                    className="reveal premium-card rounded-xl p-6 md:p-8 group cursor-pointer block no-underline"
                  >
                    {solution.icon && (
                      <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
                        {solution.icon}
                      </div>
                    )}
                    <h3 className="font-semibold text-base mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                      {solution.longDescription}
                    </p>
                    {solution.id === 'dividas-rurais' && (
                      <span className="inline-block mt-4 text-xs font-semibold text-red-400 bg-red-400/10 px-3 py-1 rounded-full">
                        Novo
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== NOVOS SERVIÇOS - COMPACT HIGHLIGHT BANNER ===== */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-green-950/20 to-gray-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-red-500/5 to-green-500/5 rounded-full blur-3xl" />
          <div className="relative section-wrap">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Dívidas Rurais */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide mb-3">
                  Defesa do Produtor
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Dívidas Rurais
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Protegemos contra juros abusivos, leilões e execuções bancárias com estratégia jurídica agressiva.
                </p>
                <Link
                  href="/dividas-rurais/"
                  className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  Saiba mais →
                </Link>
              </div>

              {/* Créditos de Carbono */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-wide mb-3">
                  Novo Serviço
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Créditos de Carbono
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Monetize ações ambientais através de consultoria jurídica e técnica completa para certificação.
                </p>
                <Link
                  href="/creditos-de-carbono/"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Saiba mais →
                </Link>
              </div>

              {/* CTA */}
              <div className="md:text-center">
                <p className="text-white/60 text-sm mb-6">
                  Quer conhecer melhor como funcionam esses serviços?
                </p>
                <a
                  href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre Dívidas Rurais ou Créditos de Carbono.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-venturi-gold/20 border border-venturi-gold/40 text-venturi-gold hover:bg-venturi-gold/30 hover:border-venturi-gold/60 font-semibold rounded-lg transition-all duration-300 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Fale com Especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== METHODOLOGY ===== */}
        {methodology && methodology.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20">
                <div className="gold-kicker mb-4">Nossa Metodologia</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
                  Processo em <span className="gradient-text">5 etapas</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 stagger">
                {methodology.slice(0, 5).map((step, index) => (
                  <div key={index} className="reveal relative group">
                    {/* Step Number */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-venturi-gold/10 border border-venturi-gold/20 mb-6 group-hover:bg-venturi-gold/20 group-hover:border-venturi-gold/40 transition-all duration-500">
                      <span className="font-serif text-xl font-bold text-venturi-gold">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== TESTIMONIALS ===== */}
        {testimonials && testimonials.length > 0 && (
          <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20 text-center">
                <div className="gold-kicker mb-4">Depoimentos</div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold">
                  O que nossos clientes dizem
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="reveal premium-card rounded-2xl p-8 md:p-10"
                  >
                    {/* Quote mark */}
                    <div className="text-5xl font-serif text-venturi-gold/20 leading-none mb-4">
                      &ldquo;
                    </div>
                    <p className="text-white/70 mb-8 leading-relaxed text-lg italic">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-venturi-gold/20 flex items-center justify-center">
                        <span className="text-venturi-gold font-semibold text-sm">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">
                          {testimonial.author}
                        </p>
                        <div className="text-venturi-gold/60 text-xs mt-0.5">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== TEAM ===== */}
        <section className="py-24 md:py-32">
          <div className="section-wrap">
            <div className="reveal mb-16 md:mb-20 text-center">
              <div className="gold-kicker mb-4">Quem Está Por Trás</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Conheça o <span className="gradient-text">time Venturi</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                4 sócios especialistas com mais de 900 processos conduzidos, década de atuação em órgãos públicos e liderança em comissões da OAB.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger">
              {[
                { name: 'Ciro Ramon', role: 'Sócio-Administrador', credential: 'Bacharel em Direito', photo: '/ciro.jpg.jpeg', specialty: 'Regularização Fundiária' },
                { name: 'Eduardo Gabriel', role: 'Sócio-Administrador', credential: 'OAB/PR 58.941', photo: '/eduardo.jpg.jpeg', specialty: 'Contencioso' },
                { name: 'Geliandra Lopes', role: 'Sócia Especialista', credential: 'OAB/PR 115.178', photo: '/geliandra.jpg.jpeg', specialty: 'Direito Ambiental' },
                { name: 'José Alaertes', role: 'Sócio-Administrador', credential: 'OAB/PR 60.934', photo: '/jose.jpg.jpeg', specialty: 'Direito Empresarial' },
              ].map((member, i) => (
                <Link href="/sobre" key={i} className="reveal premium-card rounded-2xl p-5 md:p-6 group text-center block no-underline">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-venturi-gold/20 to-venturi-gold/5 border border-venturi-gold/20 overflow-hidden relative group-hover:border-venturi-gold/40 transition-all duration-500">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base group-hover:text-venturi-gold transition-colors duration-300">{member.name}</h3>
                  <p className="text-venturi-gold/60 text-xs mt-1">{member.credential}</p>
                  <p className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">{member.specialty}</p>
                </Link>
              ))}
            </div>

            <div className="reveal mt-12 text-center">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors"
              >
                Conheça o time completo →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FAQ - REDUCED TO 5 ===== */}
        {faq && faq.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="section-wrap">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left: Header */}
                <div className="lg:col-span-4 reveal">
                  <div className="lg:sticky lg:top-32">
                    <div className="gold-kicker mb-4">FAQ</div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                      Dúvidas frequentes
                    </h2>
                    <p className="text-white/50 leading-relaxed mb-8">
                      Respostas para as dúvidas que impedem proprietários rurais de avançar.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors"
                    >
                      Ver todas as perguntas →
                    </Link>
                  </div>
                </div>

                {/* Right: Questions - ONLY 5 */}
                <div className="lg:col-span-8 space-y-3 stagger">
                  {faq.slice(0, 5).map((item, index) => (
                    <details
                      key={index}
                      className="reveal group premium-card rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer text-white/80 hover:text-white transition-colors font-medium">
                        <span className="pr-4">{item.question}</span>
                        <span className="text-venturi-gold/50 group-open:rotate-180 transition-transform duration-300 shrink-0 text-sm">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6 -mt-1">
                        <p className="text-white/50 leading-relaxed text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== FINAL CTA ===== */}
        <SchedulingCTA />
      </main>
    </>
  );
}
