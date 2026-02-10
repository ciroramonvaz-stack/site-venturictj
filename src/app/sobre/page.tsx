import { PageHero } from '@/components/PageHero';
import { company } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Sobre | VENTURI');

export default function SobrePage() {
  return (
    <>
      <PageHero kicker="Posicionamento" title="Rigor técnico, ética e clareza para o produtor rural" description="A Venturi atua no Paraná com abordagem integrada entre leitura regulatória e prova territorial." />
      <section className="section-wrap py-14 space-y-5 text-slate-300">
        <p>
          A {company.name} ({company.pronunciation}) foi estruturada para apoiar proprietários, famílias rurais e gestores em decisões com impacto patrimonial relevante.
        </p>
        <p>
          Priorizamos comunicação objetiva, documentação robusta e postura ética em cada interação com órgãos públicos e stakeholders.
        </p>
      </section>
    </>
  );
}
