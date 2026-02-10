export function PageHero({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <section className="border-b border-white/10 bg-black/30 py-14">
      <div className="section-wrap">
        <p className="gold-kicker">{kicker}</p>
        <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-slate-300">{description}</p>
      </div>
    </section>
  );
}
