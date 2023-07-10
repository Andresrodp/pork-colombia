/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  output: 'export',
  images: { unoptimized: true } // for local development
}

module.exports = nextConfig
