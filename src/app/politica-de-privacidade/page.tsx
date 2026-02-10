import { PageHero } from '@/components/PageHero';
import { company } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Política de Privacidade | VENTURI');

export default function PoliticaPage() {
  return (
    <>
      <PageHero kicker="Privacidade" title="Política de Privacidade" description="Template inicial para tratamento de dados do site da Venturi." />
      <section className="section-wrap space-y-4 py-14 text-sm text-slate-300">
        <p>Esta política descreve como o site da {company.name} coleta e usa informações fornecidas por formulários e canais de contato.</p>
        <p>Dados coletados: nome, e-mail, telefone e mensagem. Finalidade: retorno de contato e organização de atendimento.</p>
        <p>Base legal e prazos de retenção: (preencher).</p>
        <p>Direitos do titular e contato do encarregado: (preencher).</p>
      </section>
    </>
  );
}
