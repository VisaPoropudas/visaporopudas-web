/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.js');

const nextConfig = {
  // output: 'export', // Uncomment for production build
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
