/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig 