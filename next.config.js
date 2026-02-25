/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/runways-rescues',
  assetPrefix: '/runways-rescues/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
