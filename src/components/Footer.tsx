import Link from 'next/link';
import { company, navLinks } from '@/content/siteData';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70 py-12">
      <div className="section-wrap grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white">{company.shortName}</p>
          <p className="mt-3 text-sm text-slate-400">{company.tagline}</p>
        </div>
        <div>
          <p className="gold-kicker">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-venturi-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="gold-kicker">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{company.address}</li>
            <li>{company.email}</li>
            <li>{company.whatsapp}</li>
            <li>
              <a href={company.instagramLink} target="_blank" rel="noreferrer" className="hover:text-venturi-gold">
                {company.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="section-wrap mt-8 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-slate-500">{company.copyright}</p>
    </footer>
  );
}
