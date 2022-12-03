/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   images: {
      domains: ['images.unsplash.com', 'res.cloudinary.com'],
   },
};

module.exports = nextConfig;