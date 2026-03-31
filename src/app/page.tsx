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
              {/* Coluna esquerda - Conte&uacute;do */}
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-venturi-gold pulse-gold" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Im&oacute;vel embargado, sobreposto com UC ou com CAR irregular? A Venturi destrava.
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-8">
                  Destravar{' '}
                  <span className="gradient-text">propriedades embargadas</span>{' '}
                  &eacute; nossa especialidade
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
                  Consultoria estrat&eacute;gica para resolver os desafios mais complexos do seu im&oacute;vel rural. Regulariza&ccedil;&atilde;o, zoneamento, licenciamento e expertise jur&iacute;dica integrada &mdash; sem precisar de cinco escrit&oacute;rios diferentes.
                </p>

                {/* Garantia / Risk Reversal */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    An&aacute;lise preliminar gratuita
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Retorno em at&eacute; 2 horas
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    100% remoto &mdash; todo o Brasil
                  </div>
                </div>

                {/* CTAs mobile (vis&iacute;vel s&oacute; em telas menores que lg) */}
                <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                  <a
                    href={`${company.whatsappLink}?text=${encodeURIComponent('Ol\u00e1! Gostaria de saber mais sobre a consultoria Venturi.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-700" />
                    WhatsApp: An&aacute;lise Gratuita
                  </a>
                  <Link
                    href="/diagnostico"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm tracking-wide"
                  >
                    Iniciar Diagn&oacute;stico Gratuito &rarr;
                  </Link>
                </div>
              </div>

              {/* Coluna direita - Formul&aacute;rio de capta&ccedil;&atilde;o */}
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

        {/* ===== SOLUTIONS ===== */}
        {solutions && solutions.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20">
                <div className="gold-kicker mb-4">Nossas Solu&ccedil;&otilde;es</div>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
                    Cobrimos cada frente que determina o <span className="gradient-text">valor</span> do seu im&oacute;vel
                  </h2>
                  <Link
                    href="/solucoes"
                    className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors shrink-0"
                  >
                    Ver todas &rarr;
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

        {/* ===== PRODUCTS ===== */}
        {products && products.length > 0 && (
          <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20 text-center">
                <div className="gold-kicker mb-4">Nossos Produtos</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Servi&ccedil;os com <span className="gradient-text">Escopo, Prazo e Valor Definido</span>
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto text-lg">
                  Cada produto &eacute; uma solu&ccedil;&atilde;o completa, com escopo definido e resultados mensur&aacute;veis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
                {products.slice(0, 4).map((product, index) => (
                  <div
                    key={index}
                    className="reveal premium-card rounded-2xl p-8 md:p-10 flex flex-col group"
                  >
                    {/* Product Number */}
                    <div className="text-6xl font-serif font-bold text-white/[0.04] mb-6 select-none">
                      0{index + 1}
                    </div>

                    <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-venturi-gold transition-colors duration-300">
                      {product.title}
                    </h3>

                    {product.subtitle && (
                      <p className="text-venturi-gold/70 text-sm font-medium mb-4">
                        {product.subtitle}
                      </p>
                    )}

                    <p className="text-white/50 mb-8 flex-grow leading-relaxed">
                      {product.description}
                    </p>

                    {product.deliverables && product.deliverables.length > 0 && (
                      <div className="mb-8 pt-6 border-t border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">
                          Entreg&aacute;veis
                        </p>
                        <ul className="space-y-2.5">
                          {product.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="text-white/50 text-sm flex items-start gap-3"
                            >
                              <span className="text-venturi-gold/60 mt-0.5 text-xs">&bull;</span>
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Timeline & Price */}
                    <div className="flex items-center gap-4 mb-8 text-xs text-white/30">
                      {product.timeline && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-venturi-gold/40" />
                          {product.timeline}
                        </span>
                      )}
                      {product.price && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-venturi-gold/40" />
                          {product.price}
                        </span>
                      )}
                    </div>

                    <Link
                      href={product.id === 'defesa-dividas-rurais' ? '/dividas-rurais/' : '/contato'}
                      className="inline-flex items-center justify-center px-6 py-3.5 mt-auto border border-white/10 text-white/70 font-medium rounded-lg hover:bg-venturi-gold hover:text-black hover:border-venturi-gold transition-all duration-300 text-sm"
                    >
                      Solicitar &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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

              <div className="reveal mt-16 text-center">
                <Link
                  href="/metodologia"
                  className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors"
                >
                  Conhe&ccedil;a nossa metodologia completa &rarr;
                </Link>
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
                          &#9733;&#9733;&#9733;&#9733;&#9733;
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


      {/* ===== CR&Eacute;DITOS DE CARBONO - DESTAQUE ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-gray-950 to-gray-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />
        <div className="relative section-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium tracking-wide mb-6">
                Novo Servi&ccedil;o
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Cr&eacute;ditos de Carbono:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Monetize Suas A&ccedil;&otilde;es Ambientais
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Com a Lei 15.042/2024, produtores rurais e empresas podem gerar receita
                a partir de pr&aacute;ticas sustent&aacute;veis. Oferecemos consultoria jur&iacute;dica e t&eacute;cnica
                completa para certifica&ccedil;&atilde;o e comercializa&ccedil;&atilde;o de creditos de carbono.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/creditos-de-carbono/"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                  Conhe&ccedil;a a Consultoria
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href={company.whatsappLink}
                  className="inline-flex items-center justify-center gap-2 border border-green-500/30 hover:border-green-500/60 text-green-400 hover:text-green-300 font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
                >
                  Fale com Especialista
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'REDD+', desc: 'Redu\u00e7\u00e3o de desmatamento e degrada\u00e7\u00e3o florestal' },
                { title: 'Energia Renov\u00e1vel', desc: 'Projetos solares, e\u00f3licos e biomassa' },
                { title: 'Agricultura', desc: 'Pr\u00e1ticas regenerativas e sequestro de carbono' },
                { title: 'Assessoria Jur\u00eddica', desc: 'Conformidade legal e regulat\u00f3ria completa' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition-all duration-300 hover:bg-white/[0.07]">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== D&Iacute;VIDAS RURAIS - DESTAQUE ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-950 to-gray-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="relative section-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium tracking-wide mb-6">
                Defesa do Produtor
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                D&iacute;vidas Rurais:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
                  Protegemos Seu Patrim&ocirc;nio
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Banco cobrando juros abusivos? Leil&atilde;o marcado? Execu&ccedil;&atilde;o banc&aacute;ria?
                Atuamos com estrat&eacute;gia jur&iacute;dica agressiva para renegociar d&iacute;vidas,
                revisar contratos e suspender cobran&ccedil;as indevidas.
              </p>
              {/* Urgency element */}
              <div className="flex items-center gap-2 mb-8 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
                <span>Medidas urgentes em at&eacute; 48h para leil&otilde;es e penhoras</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/dividas-rurais/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                >
                  Conhe&ccedil;a a Defesa
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href={`${company.whatsappLink}?text=${encodeURIComponent('Ol\u00e1! Tenho uma d\u00edvida rural e preciso de orienta\u00e7\u00e3o jur\u00eddica.')}`}
                  className="inline-flex items-center justify-center gap-2 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-red-300 font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Fale com Advogado
                </Link>
              </div>
            </div>
            <div className="md:order-1 grid grid-cols-2 gap-4">
              {[
                { title: 'Revis\u00e3o Contratual', desc: 'An\u00e1lise de cl\u00e1usulas abusivas e juros ilegais' },
                { title: 'Renegocia\u00e7\u00e3o', desc: 'Redu\u00e7\u00e3o de saldo e novas condi\u00e7\u00f5es de pagamento' },
                { title: 'Suspens\u00e3o de Leil\u00e3o', desc: 'Medidas urgentes para proteger seu im\u00f3vel' },
                { title: 'Per\u00edcia Cont\u00e1bil', desc: 'Rec\u00e1lculo t\u00e9cnico que comprova abusos' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-red-500/30 transition-all duration-300 hover:bg-white/[0.07]">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GARANTIA / RISK REVERSAL ===== */}
      <section className="py-16 md:py-20 border-y border-white/5 bg-[#050810]">
        <div className="section-wrap">
          <div className="reveal max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-venturi-gold/10 border border-venturi-gold/20 mb-6">
              <svg className="w-8 h-8 text-venturi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Diagn&oacute;stico Preliminar <span className="gradient-text">100% Gratuito</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Avaliamos sua situa&ccedil;&atilde;o sem nenhum custo e sem compromisso. Se o diagn&oacute;stico n&atilde;o esclarecer sua principal d&uacute;vida, voc&ecirc; n&atilde;o paga nada. Simples assim.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Sem taxa de consulta
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Sem letra mi&uacute;da
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Proposta com escopo e valor definidos
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Atendemos de 20 a 20.000 hectares
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUEM SOMOS (Resumo na Home) ===== */}
      <section className="py-24 md:py-32">
        <div className="section-wrap">
          <div className="reveal mb-16 md:mb-20 text-center">
            <div className="gold-kicker mb-4">Quem Est&aacute; Por Tr&aacute;s</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Conhe&ccedil;a o <span className="gradient-text">time Venturi</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              4 s&oacute;cios especialistas com mais de 900 processos conduzidos, d&eacute;cada de atua&ccedil;&atilde;o em &oacute;rg&atilde;os p&uacute;blicos e lideran&ccedil;a em comiss&otilde;es da OAB.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger">
            {[
              { name: 'Ciro Ramon', role: 'S\u00f3cio-Administrador', credential: 'Bacharel em Direito', photo: '/ciro.jpg.jpeg', specialty: 'Regulariza\u00e7\u00e3o Fundi\u00e1ria' },
              { name: 'Eduardo Gabriel', role: 'S\u00f3cio-Administrador', credential: 'OAB/PR 58.941', photo: '/eduardo.jpg.jpeg', specialty: 'Contencioso' },
              { name: 'Geliandra Lopes', role: 'S\u00f3cia Especialista', credential: 'OAB/PR 115.178', photo: '/geliandra.jpg.jpeg', specialty: 'Direito Ambiental' },
              { name: 'Jos\u00e9 Alaertes', role: 'S\u00f3cio-Administrador', credential: 'OAB/PR 60.934', photo: '/jose.jpg.jpeg', specialty: 'Direito Empresarial' },
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
              Conhe&ccedil;a o time completo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
        {faq && faq.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="section-wrap">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left: Header */}
                <div className="lg:col-span-4 reveal">
                  <div className="lg:sticky lg:top-32">
                    <div className="gold-kicker mb-4">FAQ</div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                      D&uacute;vidas frequentes
                    </h2>
                    <p className="text-white/50 leading-relaxed mb-8">
                      Respostas para as d&uacute;vidas que impedem propriet&aacute;rios rurais de avan&ccedil;ar &mdash; e as respostas que destrancam oportunidades.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors"
                    >
                      Ver todas as perguntas &rarr;
                    </Link>
                  </div>
                </div>

                {/* Right: Questions */}
                <div className="lg:col-span-8 space-y-3 stagger">
                  {faq.slice(0, 7).map((item, index) => (
                    <details
                      key={index}
                      className="reveal group premium-card rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer text-white/80 hover:text-white transition-colors font-medium">
                        <span className="pr-4">{item.question}</span>
                        <span className="text-venturi-gold/50 group-open:rotate-180 transition-transform duration-300 shrink-0 text-sm">
                          &#9660;
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

        {/* ===== CTA ===== */}
        <SchedulingCTA />
      </main>
    </>
  );
}
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
              {/* Coluna esquerda - Conte&uacute;do */}
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-venturi-gold pulse-gold" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Im&oacute;vel embargado, sobreposto com UC ou com CAR irregular? A Venturi destrava.
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-8">
                  Destravar{' '}
                  <span className="gradient-text">propriedades embargadas</span>{' '}
                  &eacute; nossa especialidade
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
                  Consultoria estrat&eacute;gica para resolver os desafios mais complexos do seu im&oacute;vel rural. Regulariza&ccedil;&atilde;o, zoneamento, licenciamento e expertise jur&iacute;dica integrada &mdash; sem precisar de cinco escrit&oacute;rios diferentes.
                </p>

                {/* Garantia / Risk Reversal */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    An&aacute;lise preliminar gratuita
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Retorno em at&eacute; 2 horas
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    100% remoto &mdash; todo o Brasil
                  </div>
                </div>

                {/* CTAs mobile (vis&iacute;vel s&oacute; em telas menores que lg) */}
                <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                  <a
                    href={`${company.whatsappLink}?text=${encodeURIComponent('Ol\u00e1! Gostaria de saber mais sobre a consultoria Venturi.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-700" />
                    WhatsApp: An&aacute;lise Gratuita
                  </a>
                  <Link
                    href="/diagnostico"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm tracking-wide"
                  >
                    Iniciar Diagn&oacute;stico Gratuito &rarr;
                  </Link>
                </div>
              </div>

              {/* Coluna direita - Formul&aacute;rio de capta&ccedil;&atilde;o */}
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

        {/* ===== SOLUTIONS ===== */}
        {solutions && solutions.length > 0 && (
          <section className="py-24 md:py-32">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20">
                <div className="gold-kicker mb-4">Nossas Solu&ccedil;&otilde;es</div>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
                    Cobrimos cada frente que determina o <span className="gradient-text">valor</span> do seu im&oacute;vel
                  </h2>
                  <Link
                    href="/solucoes"
                    className="inline-flex items-center gap-2 text-sm text-venturi-gold hover:text-yellow-400 transition-colors shrink-0"
                  >
                    Ver todas &rarr;
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

        {/* ===== PRODUCTS ===== */}
        {products && products.length > 0 && (
          <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
            <div className="section-wrap">
              <div className="reveal mb-16 md:mb-20 text-center">
                <div className="gold-kicker mb-4">Nossos Produtos</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Servi&ccedil;os com <span className="gradient-text">Escopo, Prazo e Valor Definido</span>
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto text-lg">
                  Cada produto &eacute; uma solu&ccedil;&atilde;o completa, com escopo definido e resultados mensur&aacute;veis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
                {products.slice(0, 4).map((product, index) => (
                  <div
                    key={index}
                    className="reveal premium-card rounded-2xl p-8 md:p-10 flex flex-col group"
                  >
                    {/* Product Number */}
                    <div className="text-6xl font-serif font-bold text-white/[0.04] mb-6 select-none">
                      0{index + 1}
                    </div>

                    <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-venturi-gold transition-colors duration-300">
                      {product.title}
                    </h3>

                    {product.subtitle && (
                      <p className="text-venturi-gold/70 text-sm font-medium mb-4">
                        {product.subtitle}
                      </p>
                    )}

                    <p className="text-white/50 mb-8 flex-grow leading-relaxed">
                      {product.description}
                    </p>

                    {product.deliverables && product.deliverables.length > 0 && (
                      <div className="mb-8 pt-6 border-t border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">
                          Entreg&aacute;veis
                        </p>
                        <ul className="space-y-2.5">
                          {product.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="text-white/50 text-sm flex items-start gap-3"
                            >
                              <span className="text-venturi-gold/60 mt-0.5 text-xs">&bull;</span>
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
