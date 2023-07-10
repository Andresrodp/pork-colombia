/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  images: { unoptimized: true } // for local development
}

module.exports = nextConfig
