import Image from 'next/image';
import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';

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
    <main className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        {heroImages && heroImages[0] && (
          <Image
            src={heroImages[0]}
            alt="Propriedade rural Venturi"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Hero Content */}
        <div className="section-wrap relative z-10 flex flex-col justify-center h-full py-20">
          <div className="max-w-2xl">
            {/* Kicker */}
            <div className="gold-kicker mb-6">Imóvel rural travado? A Venturi destrava.</div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Destravar propriedades rurais é nossa especialidade
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              Consultoria estratégica para resolver os desafios mais complexos do seu imóvel rural. Regularização, zoneamento, viabilidade agronômica e muito mais.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria Venturi.')}`}
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
                Solicitar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR / STATS ===== */}
      {stats && stats.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-black to-black/95 border-b border-white/10">
          <div className="section-wrap">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-venturi-gold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SOLUTIONS SECTION ===== */}
      {solutions && solutions.length > 0 && (
        <section className="py-24 bg-black border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">NOSSAS SOLUÇÕES</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Especialistas em cada etapa
              </h2>
              <p className="text-white/70 max-w-2xl">
                Abordagem integrada para resolver todos os desafios do seu imóvel rural, desde a regularização até a otimização agronômica.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon */}
                  {solution.icon && (
                    <div className="text-4xl mb-4">{solution.icon}</div>
                  )}

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {solution.longDescription}
                  </p>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center">
              <Link
                href="/solucoes"
                className="inline-flex items-center text-venturi-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
              >
                Ver todas as soluções →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== PRODUCTS SECTION ===== */}
      {products && products.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">NOSSOS PRODUTOS</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                Serviços especializados de alto impacto
              </h2>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product, index) => (
                <div
                  key={index}
                  className="group rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 hover:border-venturi-gold/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 flex flex-col"
                >
                  {/* Product Title */}
                  <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-venturi-gold transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Product Subtitle */}
                  {product.subtitle && (
                    <p className="text-venturi-gold text-sm font-semibold mb-4">
                      {product.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-white/70 mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Key Deliverables */}
                  {product.deliverables && product.deliverables.length > 0 && (
                    <div className="mb-8">
                      <p className="text-sm font-semibold text-white/80 mb-3">
                        O que você recebe:
                      </p>
                      <ul className="space-y-2">
                        {product.deliverables.map((deliverable, idx) => (
                          <li
                            key={idx}
                            className="text-white/60 text-sm flex items-start gap-2"
                          >
                            <span className="text-venturi-gold mt-1">✓</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Link */}
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center px-6 py-3 mt-auto bg-venturi-gold/10 border border-venturi-gold text-venturi-gold font-semibold rounded-lg hover:bg-venturi-gold/20 transition-colors duration-300"
                  >
                    Saiba Mais →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== METHODOLOGY TIMELINE ===== */}
      {methodology && methodology.length > 0 && (
        <section className="py-24 bg-black border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">NOSSA METODOLOGIA</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                Processo comprovado em 5 etapas
              </h2>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {methodology.slice(0, 5).map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-venturi-gold/20 border-2 border-venturi-gold mb-6">
                    <span className="font-serif text-2xl font-bold text-venturi-gold">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Content */}
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (not on last item) */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-venturi-gold/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TESTIMONIALS SECTION ===== */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">DEPOIMENTOS</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                O que nossos clientes dizem
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-white/5 border border-white/10 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="text-venturi-gold mb-4 text-lg">
                    ★★★★★
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ PREVIEW SECTION ===== */}
      {faq && faq.length > 0 && (
        <section className="py-24 bg-black border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">DÚVIDAS FREQUENTES</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                Respostas para as perguntas mais comuns
              </h2>
            </div>

            {/* FAQ List */}
            <div className="space-y-4 max-w-3xl">
              {faq.slice(0, 4).map((item, index) => (
                <details
                  key={index}
                  className="group rounded-lg bg-white/5 border border-white/10 p-6 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  {/* Summary / Question */}
                  <summary className="flex items-center justify-between font-semibold text-white/90 group-hover:text-venturi-gold transition-colors duration-300">
                    <span>{item.question}</span>
                    <span className="text-venturi-gold group-open:rotate-180 transition-transform duration-300">
                      ▼
                    </span>
                  </summary>

                  {/* Answer */}
                  <p className="text-white/60 mt-4 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Link to Full FAQ */}
            <div className="mt-12 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center text-venturi-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
              >
                Ver todas as perguntas frequentes →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== SCHEDULING CTA SECTION ===== */}
      <SchedulingCTA />
    </main>
  );
}
