import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { company } from '@/content/siteData';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });

export const metadata: Metadata = {
  title: 'VENTURI | Consultoria Técnica & Jurídica',
  description: company.tagline
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    address: company.address,
    telephone: company.whatsapp,
    url: company.site,
    email: company.email
  };

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-[var(--font-montserrat)] noise-bg">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18018469103"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18018469103');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
