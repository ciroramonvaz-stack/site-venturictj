import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';

export const metadata = getPageMetadata('Soluções | VENTURI');

export default function SolucoesPage() {
  const { company, solutions, products } = siteData;

  return (
    <main className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black border-b border-white/10">
        <div className="section-wrap">
          <div className="max-w-3xl">
            {/* Kicker */}
            <div className="gold-kicker mb-6">Soluções</div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Seu imóvel está travado? Temos a solução técnica e jurídica para cada frente.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Sobreposição com UC, embargo do ICMBio, pendência no CAR/SIGEF ou restrição do IAT — cobrimos cada frente com diagnóstico e plano de ação sob medida.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS DETAILED SECTION ===== */}
      {solutions && solutions.length > 0 && (
        <section className="py-24 bg-black border-b border-white/10">
          <div className="section-wrap">
            {/* Section Header */}
            <div className="mb-16">
              <div className="gold-kicker mb-4">NOSSAS SOLUÇÕES</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                5 Áreas de Especialização
              </h2>
            </div>

            {/* Solutions Grid - Full Details */}
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div
                  id={solution.id}
                  key={solution.id}
                  className="group rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 md:p-12 hover:border-venturi-gold/50 hover:from-white/15 hover:to-white/10 transition-all duration-300"
                >
                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Icon and Number */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                      {/* Icon */}
                      <div className="text-6xl mb-4 md:mb-6">{solution.icon}</div>

                      {/* Step Number */}
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-venturi-gold/20 border border-venturi-gold">
                        <span className="font-semibold text-venturi-gold">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      {/* Title */}
                      <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-venturi-gold transition-colors duration-300">
                        {solution.title}
                      </h3>

                      {/* Long Description */}
                      <p className="text-white/80 text-lg leading-relaxed mb-4">
                        {solution.longDescription}
                      </p>

                      {/* Related Product Link (if applicable) */}
                      <div className="mt-6">
                        <Link
                          href={`/contato?solucao=${solution.slug}`}
                          className="inline-flex items-center px-6 py-3 bg-venturi-gold/10 border border-venturi-gold text-venturi-gold font-semibold rounded-lg hover:bg-venturi-gold/20 transition-colors duration-300"
                        >
                          Solicitar Consultoria →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Serviços Especializados de Alto Impacto
              </h2>
              <p className="text-white/70 max-w-2xl">
                Cada produto é uma solução completa, com escopo definido, prazo estimado e valor estabelecido.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
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
                  <p className="text-white/70 mb-6 flex-grow leading-relaxed">
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
                            <span className="text-venturi-gold flex-shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Timeline and Price Info */}
                  <div className="mb-6 space-y-2 pb-6 border-b border-white/10">
                    {product.timeline && (
                      <p className="text-white/60 text-sm">
                        <span className="font-semibold text-white">Prazo:</span>{' '}
                        {product.timeline}
                      </p>
                    )}
                    {product.price && (
                      <p className="text-white/60 text-sm">
                        <span className="font-semibold text-white">Investimento:</span>{' '}
                        {product.price}
                      </p>
                    )}
                  </div>

                  {/* CTA Link */}
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center px-6 py-3 bg-venturi-gold/10 border border-venturi-gold text-venturi-gold font-semibold rounded-lg hover:bg-venturi-gold/20 transition-colors duration-300"
                  >
                    Solicitar Diagnóstico →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 border-b border-white/10">
        <div className="section-wrap text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Pronto para resolver os desafios do seu imóvel?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Entre em contato para uma avaliação preliminar gratuita. Análise inicial sem comprometimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de solicitar uma consultoria sobre as soluções da Venturi.')}`}
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
