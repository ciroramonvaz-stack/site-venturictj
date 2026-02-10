export function SchedulingCTA() {
  return (
    <section className="section-wrap py-14">
      <div className="rounded-2xl border border-venturi-gold/40 bg-gold-gradient p-6 md:p-10">
        <p className="gold-kicker">Agendar Diagnóstico</p>
        <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">Converse com a Venturi e receba um plano inicial.</h2>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-sm" type="text" placeholder="Nome" aria-label="Nome" />
          <input className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-sm" type="text" placeholder="WhatsApp" aria-label="WhatsApp" />
          <input className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-sm md:col-span-2" type="text" placeholder="Município e situação do imóvel" aria-label="Município" />
          <button className="rounded-lg bg-venturi-gold px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black md:col-span-2" type="button">
            Enviar diagnóstico
          </button>
        </form>
      </div>
    </section>
  );
}
