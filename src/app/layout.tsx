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
  metadataBase: new URL('https://venturictj.com'),
  title: {
    default: 'Regularização e Defesa de Imóveis Rurais — Venturi CTJ',
    template: '%s | Venturi CTJ',
  },
  description:
    'Consultoria técnico-jurídica para imóveis rurais: regularização, sobreposição com UC, embargos, due diligence e dívida rural. Análise gratuita em 2h.',
  keywords: [
    'regularização imóvel rural',
    'sobreposição unidade conservação',
    'embargo ICMBio',
    'due diligence rural',
    'CAR',
    'georreferenciamento SIGEF',
    'direito agrário',
    'consultoria jurídica agro',
  ],
  authors: [{ name: 'Venturi Consultoria Técnica & Jurídica' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://venturictj.com',
    siteName: 'Venturi CTJ',
    title: 'Regularização e Defesa de Imóveis Rurais — Venturi CTJ',
    description:
      'Consultoria técnico-jurídica para imóveis rurais. Regularização, defesa ambiental, due diligence e estruturação patrimonial. Análise gratuita em 2h.',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 400,
        alt: 'Venturi — Consultoria Técnica & Jurídica para Imóveis Rurais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regularização e Defesa de Imóveis Rurais — Venturi CTJ',
    description:
      'Consultoria técnico-jurídica para imóveis rurais. Análise gratuita em 2h.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': company.site + '/#org',
    name: company.fullName,
    legalName: company.fullName,
    alternateName: company.name,
    description: company.description,
    url: company.site,
    logo: company.site + '/logo.png',
    image: company.site + '/logo.png',
    telephone: company.whatsapp,
    email: company.email,
    taxID: company.cnpj,
    vatID: company.cnpj,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      addressLocality: company.city,
      addressRegion: company.stateCode,
      postalCode: company.zipCode,
      addressCountry: company.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.0916,
      longitude: -50.1668,
    },
    areaServed: [
      { '@type': 'Country', name: 'Brasil' },
      { '@type': 'State', name: 'Paraná' },
    ],
    knowsAbout: [
      'Direito agrário',
      'Direito ambiental rural',
      'Regularização fundiária',
      'Cadastro Ambiental Rural',
      'Georreferenciamento SIGEF',
      'Due diligence rural',
      'Embargos ambientais',
      'Sobreposição com Unidades de Conservação',
    ],
    sameAs: [
      'https://instagram.com/venturictj',
    ],
    employee: [
      {
        '@type': 'Person',
        name: 'Eduardo Gabriel Ferreira de Andrade',
        jobTitle: 'Diretor Jurídico',
        identifier: 'OAB/PR 58.941',
      },
      {
        '@type': 'Person',
        name: 'Geliandra Lopes Alves Pereira',
        jobTitle: 'Especialista em Direito Ambiental',
        identifier: 'OAB/PR 115.178',
      },
      {
        '@type': 'Person',
        name: 'José Alaertes Silveira',
        jobTitle: 'Diretor Empresarial',
        identifier: 'OAB/PR 60.934',
      },
      {
        '@type': 'Person',
        name: 'Ciro Ramon Vaz',
        jobTitle: 'Fundador & Operações',
      },
    ],
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
