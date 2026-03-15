/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    basePath: '/site-venturictj',
    assetPrefix: '/site-venturictj/',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
