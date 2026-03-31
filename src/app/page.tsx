import Image from 'next/image';
import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata = getPageMetadata('Home | VENTURI');

export default function Home() {
  const { company, heroImages, solutions, testimonials, stats } = siteData;

  const areaTagMap: Record<string, { label: string; color: string }> = {
    'Cliente (M.F.)': { label: 'Sobreposição UC', color: 'emerald' },
    'Cliente (A.C.)': { label: 'Diagnóstico Fundiário', color: 'blue' },
    'Cliente (J.P.)': { label: 'Crédito Rural', color: 'yellow' },
    'Cliente (R.L.)': { label: 'Embargo Ambiental', color: 'orange' },
    'Cliente (S.M.)': { label: 'Dívidas Rurais', color: 'red' },
  };

  const getAreaTag = (author: string) => {
    return areaTagMap[author] || { label: 'Sucesso', color: 'blue' };
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
      yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
      red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <ScrollReveal />
      <main className="bg-black text-white">
        {/* SECTION 1: HERO */}
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
          <Image
            src={heroImages[0]}
            alt="Imóvel rural brasileiro"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative z-10 w-full h-full flex items-center">
            <div className="section-wrap">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full lg:py-20 py-16">
                {/* Left Column */}
                <div className="reveal flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 w-fit mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-xs uppercase tracking-widest text-white/60">
                      Especialistas em Imóveis Rurais Embargados e Sobrepostos com UC
                    </span>
                  </div>

                  <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6">
                    Seu imóvel rural está <span className="block">
                      <span className="gradient-text">travado</span>? A Venturi
                    </span>
                    <span className="gradient-text">destrava</span>.
                  </h1>

                  <p className="text-lg lg:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
                    Regularizamos documentos, revertemos embargos, defendemos contra cobranças abusivas e destravamos propriedades sobrepostas com Unidades de Conservação.
                  </p>

                  {/* Trust Badges */}
                  <div className="flex flex-col gap-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Análise gratuita</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Retorno em até 2h</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>100% remoto</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>8 estados atendidos</span>
                    </div>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col gap-3 lg:hidden">
                    <a
                      href={company.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow inline-flex items-center justify-center gap-2 px-6 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide w-full"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-700" />
                      Abrir WhatsApp
                    </a>
                    <Link
                      href="/#solucoes"
                      className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-venturi-gold/50 hover:text-venturi-gold transition-all duration-300 text-sm tracking-wide"
                    >
                      Conheça nossas soluções →
                    </Link>
                  </div>
                </div>

                {/* Right Column - Lead Form (hidden on mobile) */}
                <div className="hidden lg:flex reveal">
                  <LeadCaptureForm />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-6 h-6 text-venturi-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* SECTION 2: TRUST BAR */}
        <section className="bg-[#050810] border-b border-white/5">
          <div className="section-wrap py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="gradient-text text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: RESULTADOS COMPROVADOS */}
        <section id="resultados" className="py-20 md:py-28">
          <div className="section-wrap">
            <div className="text-center mb-16">
              <div className="gold-kicker mb-3">Casos de Sucesso</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Resultados que <span className="gradient-text">Comprovam</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Cada caso é uma propriedade destravada, um embargo revertido ou um patrimônio salvo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => {
                const areaTag = getAreaTag(testimonial.author);
                const colorClasses = getColorClasses(areaTag.color);
                const initials = testimonial.author
                  .split('(')[0]
                  .trim()
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')
                  .toUpperCase();

                return (
                  <div key={index} className="reveal premium-card rounded-2xl p-6 md:p-8">
                    <div className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold border ${colorClasses.bg} ${colorClasses.border} ${colorClasses.text}`}>
                      {areaTag.label}
                    </div>

                    <div className="text-4xl mb-4 text-venturi-gold">&#8220;</div>

                    <p className="text-white/80 italic leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-venturi-gold/10 border border-venturi-gold/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-venturi-gold">{initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white">{testimonial.author}</p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-venturi-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-white/70 mb-6 text-lg font-medium">
                Mais de 150 propriedades destravadas em todo o Brasil
              </p>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-venturi-gold hover:text-yellow-300 transition-colors duration-300 font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: NOSSAS SOLUÇÕES */}
        <section className="py-20 md:py-28" id="solucoes">
          <div className="section-wrap">
            <div className="text-center mb-16">
              <div className="gold-kicker mb-3">Como Podemos Ajudar</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Soluções para <span className="gradient-text">Cada Situação</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((solution, index) => {
                let href = `/solucoes/#${solution.id}`;
                let badge = null;

                if (solution.id === 'uc-restricoes') {
                  href = '/sobreposicao-uc/';
                  badge = 'Especialidade';
                } else if (solution.id === 'dividas-rurais') {
                  href = '/dividas-rurais/';
                  badge = 'Defesa';
                }

                return (
                  <Link
                    key={index}
                    href={href}
                    className="reveal premium-card rounded-xl p-6 md:p-8 group cursor-pointer block no-underline hover:border-venturi-gold/30 transition-colors duration-300"
                  >
                    <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
                      {solution.icon}
                    </div>
                    <h3 className="font-semibold text-base mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                      {solution.longDescription}
                    </p>
                    {badge === 'Especialidade' && (
                      <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                        Especialidade
                      </span>
                    )}
                    {badge === 'Defesa' && (
                      <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-red-400/10 border border-red-400/20 text-red-400">
                        Defesa
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* 7th Card: Carbono */}
              <Link
                href="/carbono/"
                className="reveal premium-card rounded-xl p-6 md:p-8 group cursor-pointer block no-underline hover:border-venturi-gold/30 transition-colors duration-300"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  🌱
                </div>
                <h3 className="font-semibold text-base mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                  Créditos de Carbono
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                  Monetize ações ambientais na sua propriedade rural. Consultoria jurídica e técnica completa para certificação de créditos de carbono e acesso ao mercado voluntário.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">
                  Novo
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: QUEM SOMOS */}
        <section id="quem-somos" className="py-20 md:py-28">
          <div className="section-wrap">
            <div className="text-center mb-16">
              <div className="gold-kicker mb-3">Quem Está Por Trás</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Conheça o <span className="gradient-text">time Venturi</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                4 sócios especialistas com mais de 900 processos conduzidos, década de atuação em órgãos públicos e liderança em comissões da OAB.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger">
              {[
                { name: 'Ciro Ramon', credential: 'Bacharel em Direito', photo: '/ciro.jpg.jpeg', specialty: 'Regularização Fundiária' },
                { name: 'Eduardo Gabriel', credential: 'OAB/PR 58.941', photo: '/eduardo.jpg.jpeg', specialty: 'Contencioso' },
                { name: 'Geliandra Lopes', credential: 'OAB/PR 115.178', photo: '/geliandra.jpg.jpeg', specialty: 'Direito Ambiental' },
                { name: 'José Alaertes', credential: 'OAB/PR 60.934', photo: '/jose.jpg.jpeg', specialty: 'Direito Empresarial' },
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

            <div className="text-center">
              <Link
                href="/sobre/"
                className="inline-flex items-center gap-2 text-venturi-gold hover:text-yellow-300 transition-colors duration-300 font-semibold"
              >
                Conheça o time completo →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: FALE CONOSCO */}
        <section id="contato" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="section-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="reveal flex flex-col justify-center">
                <div className="gold-kicker mb-3">Fale Conosco</div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Pronto para <span className="gradient-text">Resolver</span>?
                </h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Entre em contato para uma análise gratuita e sem compromisso. Retornamos em até 2 horas.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <span className="w-3 h-3 rounded-full bg-green-500 block" />
                      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/60 mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-venturi-gold hover:text-yellow-300 transition-colors duration-300 font-semibold text-lg"
                      >
                        {company.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-venturi-gold mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-venturi-gold hover:text-yellow-300 transition-colors duration-300 font-semibold text-lg"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-venturi-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Instagram</p>
                      <a
                        href={company.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-venturi-gold hover:text-yellow-300 transition-colors duration-300 font-semibold text-lg"
                      >
                        {company.instagram}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-venturi-gold mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Endereço</p>
                      <p className="text-venturi-gold font-semibold text-lg">{company.address}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <svg className="w-5 h-5 text-venturi-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sigilo total</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <svg className="w-5 h-5 text-venturi-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <svg className="w-5 h-5 text-venturi-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Diagnóstico preliminar gratuito</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="reveal">
                <div className="premium-card rounded-2xl p-8 md:p-10 space-y-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Solicite uma Análise Gratuita
                  </h3>
                  <p className="text-white/40 text-sm mb-6">
                    Preencha e entraremos em contato pelo WhatsApp.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-venturi-gold/50 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-venturi-gold/50 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">
                        Como podemos ajudar?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Descreva brevemente sua situação..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-venturi-gold/50 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <a
                      href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de solicitar uma análise gratuita para meu imóvel rural.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-700" />
                      Enviar pelo WhatsApp
                    </a>

                    <p className="text-center text-white/20 text-xs">
                      Seus dados estão protegidos. Sem spam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
