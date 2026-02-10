import { PageHero } from '@/components/PageHero';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('UC & Imóvel | VENTURI');

const cards = [
  {
    title: 'Imóvel dentro da UC',
    text: 'Em regra, exige atenção máxima ao regime da categoria da unidade, zoneamento e atos específicos ((citar ato/número)).'
  },
  {
    title: 'Imóvel no entorno da UC',
    text: 'A leitura do entorno depende de critérios técnicos e da atividade pretendida, podendo existir condicionantes administrativas.'
  },
  {
    title: 'Zona de amortecimento (ZA)',
    text: 'Quando instituída, a ZA pode gerar exigências adicionais para licenciamento, manejo e expansão de atividades.'
  }
];

export default function UcImovelPage() {
  return (
    <>
      <PageHero
        kicker="Guia prático"
        title="UC & Imóvel Rural: o que muda na prática"
        description="Resumo didático para entender cenários de dentro, entorno e zona de amortecimento, com foco em decisão e planejamento."
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
