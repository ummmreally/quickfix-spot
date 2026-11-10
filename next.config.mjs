/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ['http://127.0.0.1:49532', 'http://localhost:49532'],
};

export default nextConfig;
