/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  outputFileTracingIncludes: {
    '/readme/[slug]': ['./readmes/**/*'],
  },
};

module.exports = nextConfig;
