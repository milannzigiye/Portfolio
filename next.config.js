/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['github.com'], // Add any other domains you need for images
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
}

module.exports = nextConfig 