/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  productionBrowserSourceMaps: true,
 output: 'export',
  compress: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.commons = {
        name: 'commons',
        chunks: 'all',
        minChunks: 2,
      };
    }

    return config;
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
