import { PageHero } from '@/components/PageHero';
import { deliverables } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Entregáveis | VENTURI');

export default function EntregaveisPage() {
  return (
    <>
      <PageHero kicker="Resultados" title="Entregáveis técnicos para orientar decisões de alto impacto" description="Cada entrega é pensada para sustentar protocolos, negociações e defesas com fundamento técnico-jurídico." />
      <section className="section-wrap py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {deliverables.map((item) => (
            <li key={item} className="rounded-xl border border-white/10 px-5 py-4 text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
