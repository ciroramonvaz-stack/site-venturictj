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
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-venturi-gold hover:border-venturi-gold/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-venturi-gold hover:border-venturi-gold/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-venturi-gold hover:border-venturi-gold/30 transition-all duration-300"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
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
