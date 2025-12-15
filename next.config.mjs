/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
    // Disable optimization for external images on Vercel
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    // Allow all image sizes for better compatibility
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Add domains for better compatibility
    domains: ['fakestoreapi.com', 'via.placeholder.com'],
  },
};

export default nextConfig;
