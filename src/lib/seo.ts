import type { Metadata } from 'next';
import { company } from '@/content/siteData';

const defaultDescription =
  'Consultoria técnica e jurídica para agronegócio com foco em UCs, ICMBio, IAT-PR, fundiário, INCRA, SIGEF e defesa administrativa.';

export function getPageMetadata(title: string, description = defaultDescription): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(company.site),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'pt_BR',
      siteName: company.shortName
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
