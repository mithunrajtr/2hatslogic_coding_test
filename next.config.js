/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: '/2hatslogic_coding_test',
    basePath: '/2hatslogic_coding_test'
  }
  
  module.exports = nextConfig