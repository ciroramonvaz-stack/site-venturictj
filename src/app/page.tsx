import Image from 'next/image';
import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';
import ScrollReveal from '@/components/ScrollReveal';

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
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-venturi-gold pulse-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Im&oacute;vel embargado, sobreposto com UC ou com CAR irregular? A Venturi destrava.
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8">
                Destravar{' '}
                <span className="gradient-text">propriedades embargadas</span>{' '}
                &eacute; nossa especialidade
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed">
                Consultoria estrat&eacute;gica para resolver os desafios mais complexos do seu im&oacute;vel rural. Regulariza&ccedil;&atilde;o, zoneamento, licenciamento e expertise jur&iacute;dica integrada &mdash; sem precisar de cinco escrit&oacute;rios diferentes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${company.whatsappLink}?text=${encodeURIComponent('OlÃÂ¡! Gostaria de saber mais sobre a consultoria Venturi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide"
                >
                  <span className="w-2 h-2 rounded-full bg-green-700" />
                  WhatsApp: An&aacute;lise Gratuita
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm tracking-wide"
                >
                  Iniciar Diagn&oacute;stico Gratuito &rarr;
                </Link>
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 stagger">
                {solutions.map((solution, index) => (
                  <Link
                    href={`/solucoes/#${solution.id}`}
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
                {products.slice(0, 3).map((product, index) => (
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
                          EntregÃÂ¡veis
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
                      href="/contato"
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
                  {faq.slice(0, 5).map((item, index) => (
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
