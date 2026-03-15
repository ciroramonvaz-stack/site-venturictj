import { PageHero } from '@/components/PageHero';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('UC & Imóvel | VENTURI');

const cards = [
  {
    title: 'Imóvel dentro da UC',
    text: 'Exige análise detalhada do regime da categoria da UC, zoneamento e atos normativos específicos. A Venturi identifica restrições de uso, direitos adquiridos e caminhos para regularização.'
  },
  {
    title: 'Imóvel no entorno da UC',
    text: 'A análise do entorno depende de critérios técnicos e da atividade pretendida. Avaliamos condicionantes administrativas e licenciamentos necessários para operar sem risco.'
  },
  {
    title: 'Zona de amortecimento (ZA)',
    text: 'Quando instituída, a ZA impõe exigências adicionais para licenciamento, manejo e expansão. Mapeamos as restrições aplicáveis e orientamos a estratégia de conformidade.'
  }
];

export default function UcImovelPage() {
  return (
    <>
      <PageHero
        kicker="Guia prático"
        title="UC & Imóvel Rural: entenda o que trava e como destravar"
        description="Seu imóvel está dentro, no entorno ou na zona de amortecimento de uma UC? Entenda os impactos reais sobre uso, venda e financiamento — e as alternativas jurídicas disponíveis."
      />
      <section className="section-wrap py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 p-6">
              <h2 className="font-serif text-2xl text-white">{card.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
