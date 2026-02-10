import Image from 'next/image';
import Link from 'next/link';
import { SchedulingCTA } from '@/components/SchedulingCTA';
import { company, heroImages, solutions, testimonials } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Home | VENTURI');

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <Image src={heroImages[0]} alt="Paisagem rural" fill className="object-cover opacity-35" priority />
        <div className="section-wrap relative py-24 md:py-32">
          <p className="gold-kicker">Consultoria premium para o agronegócio</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
            Decisões jurídicas e técnicas para proteger o valor do seu imóvel rural.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Atuação integrada em UCs, ICMBio, IAT-PR, INCRA/SIGEF e defesa administrativa com foco em clareza, segurança e estratégia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={company.whatsappLink} className="rounded bg-venturi-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black">
              Falar no WhatsApp
            </a>
            <Link href="/contato/" className="rounded border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em]">
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16">
        <p className="gold-kicker">Soluções-chave</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.slice(0, 3).map((item) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-serif text-2xl text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16">
        <p className="gold-kicker">Visão territorial</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {heroImages.map((img) => (
            <div key={img} className="relative h-64 overflow-hidden rounded-xl border border-white/10">
              <Image src={img} alt="Território rural" fill className="object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                <p className="text-sm uppercase tracking-[0.15em] text-white">Análise espacial e regulatória</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16">
        <p className="gold-kicker">Depoimentos</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="rounded-xl border border-white/10 p-6">
              <p className="text-slate-300">“{t.text}”</p>
              <cite className="mt-3 block text-sm text-venturi-gold">{t.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <SchedulingCTA />
    </>
  );
}
