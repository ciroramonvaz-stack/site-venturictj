import { PageHero } from '@/components/PageHero';
import { deliverables } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';
import SchedulingCTA from '@/components/SchedulingCTA';

export const metadata = getPageMetadata('Entregáveis | VENTURI');

export default function EntregaveisPage() {
  return (
    <>
      <PageHero
        kicker="Entregáveis Premium"
        title="Documentação técnico-jurídica de padrão pericial que destrava patrimônios e sustenta decisões de alto impacto"
        description="Cada relatório e parecer é produzido com rigor técnico de nível pericial — aceitos por bancos, órgãos ambientais (ICMBio, IBAMA, IAT), cartórios de registro e tribunais. Documentação que resiste ao escrutínio mais exigente e transforma complexidade regulatória em segurança patrimonial."
      />
      <section className="section-wrap py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-venturi-gold/50 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SchedulingCTA />
    </>
  );
}
