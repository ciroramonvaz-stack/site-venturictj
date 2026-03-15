import { PageHero } from '@/components/PageHero';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('UC & Imóvel | VENTURI');

const cards = [
  {
    title: 'Imóvel dentro da UC',
    text: 'Exige análise aprofundada do regime da categoria da UC (Proteção Integral ou Uso Sustentável), plano de manejo, zoneamento e atos normativos específicos. A Venturi mapeia cada restrição, identifica direitos adquiridos anteriores à criação da UC e constrói o caminho jurídico para regularização ou indenização.'
  },
  {
    title: 'Imóvel no entorno da UC',
    text: 'A análise do entorno exige cruzamento de critérios técnicos, faixa de influência e atividade pretendida. Avaliamos todas as condicionantes administrativas, licenciamentos exigidos e restrições de supressão vegetal para garantir operação segura e em conformidade.'
  },
  {
    title: 'Zona de amortecimento (ZA)',
    text: 'Quando instituída por ato normativo, a ZA impõe exigências adicionais para licenciamento, manejo florestal, edificação e expansão produtiva. Mapeamos todas as restrições aplicáveis, verificamos a legalidade das imposições e orientamos a estratégia de conformidade ou contestação administrativa.'
  }
];

export default function UcImovelPage() {
  return (
    <>
      <PageHero
        kicker="Consultoria Especializada"
        title="UC & Imóvel Rural: diagnóstico completo para destravar seu patrimônio"
        description="Seu imóvel está dentro, no entorno ou na zona de amortecimento de uma Unidade de Conservação? Mapeamos cada restrição legal, identificamos direitos adquiridos e construímos a estratégia técnico-jurídica para destravar uso, venda, financiamento e regularização — com atuação perante ICMBio, IBAMA, IAT e demais órgãos gestores."
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
