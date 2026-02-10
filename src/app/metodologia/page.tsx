import { PageHero } from '@/components/PageHero';
import { methodology } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Metodologia | VENTURI');

export default function MetodologiaPage() {
  return (
    <>
      <PageHero kicker="Método Venturi" title="Fatos, Normas e Estratégia em etapas claras" description="Processo construído para reduzir risco, melhorar previsibilidade e aumentar qualidade técnica das decisões." />
      <section className="section-wrap py-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {methodology.map((item) => (
            <article key={item.step} className="rounded-xl border border-white/10 p-6">
              <p className="text-sm text-venturi-gold">{item.step}</p>
              <h2 className="mt-2 font-serif text-2xl text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
