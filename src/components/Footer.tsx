import Link from 'next/link';
import { company, navLinks } from '@/content/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030508] border-t border-white/5">
      {/* Main Footer */}
      <div className="section-wrap py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Logo Venturi"
                className="h-10 w-10 rounded-full border border-white/10 object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] text-white">
                  VENTURI
                </p>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Consultoria Técnica & Jurídica
                </p>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Desbloqueamos o potencial de propriedades rurais em todo o Brasil com expertise técnico-jurídica de alto nível.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${company.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-venturi-gold hover:border-venturi-gold/30 transition-all duration-300 text-sm"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-venturi-gold hover:border-venturi-gold/30 transition-all duration-300 text-sm"
                aria-label="WhatsApp"
              >
                WA
              </a>
              <a
                href={`mailto:${company.email}`}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-venturi-gold hover:border-venturi-gold/30 transition-all duration-300 text-sm"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-venturi-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                'Diagnóstico Fundiário',
                'Análise Ambiental',
                'Regularização Registral',
                'Embargos ICMBio',
                'Restrições IAT-PR',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/solucoes"
                    className="text-sm text-white/40 hover:text-venturi-gold transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-venturi-gold transition-colors duration-300"
                >
                  {company.whatsapp}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-white/60 hover:text-venturi-gold transition-colors duration-300"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Localização</p>
                <p className="text-sm text-white/60">
                  {company.address}
                </p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Atendimento</p>
                <p className="text-sm text-white/60">
                  Todo o Brasil • 100% Remoto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} {company.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
