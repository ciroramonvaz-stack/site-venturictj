import { PageHero } from '@/components/PageHero';
import { company } from '@/content/siteData';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Contato | VENTURI');

export default function ContatoPage() {
  return (
    <>
      <PageHero kicker="Contato" title="Fale com a Venturi" description="Envie seu contexto e receba retorno técnico-jurídico inicial." />
      <section className="section-wrap grid gap-6 py-14 md:grid-cols-2">
        <form className="space-y-4 rounded-xl border border-white/10 p-6">
          <input className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3" type="text" placeholder="Nome" />
          <input className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3" type="email" placeholder="E-mail" />
          <textarea className="h-32 w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3" placeholder="Descreva a situação" />
          <button className="rounded-lg bg-venturi-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black" type="button">Enviar</button>
        </form>
        <div className="space-y-4 rounded-xl border border-white/10 p-6">
          <p>{company.address}</p>
          <p>{company.email}</p>
          <a href={company.whatsappLink} className="text-venturi-gold">{company.whatsapp}</a>
          <iframe
            title="Mapa Ponta Grossa"
            src="https://www.google.com/maps?q=Rua%20Santos%20Dumont,%20188%20Ponta%20Grossa%20PR&output=embed"
            className="h-64 w-full rounded-lg border border-white/15"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
