import Link from 'next/link';
import { company, navLinks } from '@/content/siteData';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050810e6] backdrop-blur">
      <div className="section-wrap flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo Venturi" className="h-12 w-12 rounded-full border border-white/15 object-cover" loading="lazy" />
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-white">VENTURI</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-venturi-gold">Consultoria Técnica & Jurídica</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs uppercase tracking-[0.22em] text-slate-300 transition hover:text-venturi-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <a href={company.whatsappLink} className="rounded-full border border-venturi-gold/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-venturi-gold transition hover:bg-venturi-gold hover:text-black">
          WhatsApp
        </a>
      </div>
    </header>
  );
}
