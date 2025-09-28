/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;
=======
const withPWA = require('next-pwa')({
  dest: 'public',
  // turn PWA off for this environment
  disable: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
>>>>>>> cd71fa2 (chore: disable next-pwa for Firebase App Hosting)
