/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: { exclude: ['error', 'warn'] },
  },
};
module.exports = nextConfig;
