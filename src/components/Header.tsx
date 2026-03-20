'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { company, navLinks } from '@/content/siteData';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackWhatsAppConversion(url: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    let navigated = false;
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18018469103/kpwVCLDEpYscEO-J8I9D',
      'event_callback': () => {
        if (!navigated) { navigated = true; window.open(url, '_blank'); }
      }
    });
    setTimeout(() => { if (!navigated) { navigated = true; window.open(url, '_blank'); } }, 1000);
  } else {
    window.open(url, '_blank');
  }
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackWhatsAppConversion(company.whatsappLink);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050810]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="section-wrap flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Logo Venturi"
            className="h-11 w-11 rounded-full border border-white/10 object-cover group-hover:border-venturi-gold/50 transition-all duration-300"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-white group-hover:text-venturi-gold transition-colors duration-300">
              VENTURI
            </p>
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
              Consultoria T&eacute;cnica &amp; Jur&iacute;dica
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 py-2 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-venturi-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={company.whatsappLink}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-venturi-gold/10 border border-venturi-gold/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-venturi-gold hover:bg-venturi-gold hover:text-black transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-gold" />
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-wrap flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-[0.15em] text-white/70 hover:text-venturi-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={company.whatsappLink}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-venturi-gold px-6 py-3 text-sm font-semibold text-black"
          >
            <span className="w-2 h-2 rounded-full bg-green-700" />
            Fale no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
