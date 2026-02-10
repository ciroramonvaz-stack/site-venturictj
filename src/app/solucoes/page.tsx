import { PageHero } from '@/components/PageHero';
import { SchedulingCTA } from '@/components/SchedulingCTA';
import { solutions } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Soluções | VENTURI');

export default function SolucoesPage() {
  return (
    <>
      <PageHero kicker="Áreas de atuação" title="Soluções por frente técnica e jurídica" description="Atendimento integrado para propriedades rurais com restrições ambientais, fundiárias e administrativas." />
      <section className="section-wrap py-14 grid gap-5 md:grid-cols-2">
        {solutions.map((item) => (
          <article key={item.title} className="rounded-xl border border-white/10 p-6">
            <h2 className="font-serif text-2xl text-white">{item.title}</h2>
            <p className="mt-3 text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>
      <SchedulingCTA />
    </>
  );
}
