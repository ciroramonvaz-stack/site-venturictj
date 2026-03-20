'use client';

import { company } from '@/content/siteData';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function FloatingWhatsApp() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      let navigated = false;
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18018469103/kpwVCLDEpYscEO-J8I9D',
        'event_callback': () => {
          if (!navigated) { navigated = true; window.open(company.whatsappLink, '_blank'); }
        }
      });
      setTimeout(() => { if (!navigated) { navigated = true; window.open(company.whatsappLink, '_blank'); } }, 1000);
    } else {
      window.open(company.whatsappLink, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-venturi-gold p-4 text-black shadow-glow transition hover:scale-105 cursor-pointer"
    >
      WhatsApp
    </button>
  );
}
