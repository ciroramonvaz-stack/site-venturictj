import type { MetadataRoute } from 'next';
import { company, navLinks } from '@/content/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${company.site}${link.href}`,
    changeFrequency: 'monthly',
    priority: link.href === '/' ? 1 : 0.8
  }));
}
