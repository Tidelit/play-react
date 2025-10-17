import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para producción en cPanel
  output: 'standalone',
  
  // Optimización de imágenes
  images: {
    unoptimized: true, // Importante para cPanel
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuración de experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  
  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Configuración para archivos estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Configuración de webpack
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para producción
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    }
    
    return config
  },
  
  // Configuración de trailing slash
  trailingSlash: false,
  
  // Configuración de powered by header
  poweredByHeader: false,
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de ETags
  generateEtags: true,
};

export default nextConfig;
