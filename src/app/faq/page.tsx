import { PageHero } from '@/components/PageHero';
import { faq } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('FAQ | VENTURI');

export default function FaqPage() {
  return (
    <>
      <PageHero kicker="Dúvidas frequentes" title="Perguntas comuns de produtores e proprietários rurais" description="Respostas objetivas para orientar os próximos passos com mais segurança." />
      <section className="section-wrap py-14 space-y-4">
        {faq.map((item) => (
          <details key={item.q} className="rounded-xl border border-white/10 p-5">
            <summary className="cursor-pointer font-semibold text-white">{item.q}</summary>
            <p className="mt-3 text-sm text-slate-300">{item.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
