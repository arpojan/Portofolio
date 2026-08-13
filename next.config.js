/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portofolio',
  assetPrefix: '/portofolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
