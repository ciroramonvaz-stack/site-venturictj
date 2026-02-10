import { company } from '@/content/siteData';

export function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsappLink}
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-venturi-gold p-4 text-black shadow-glow transition hover:scale-105"
    >
      WhatsApp
    </a>
  );
}
