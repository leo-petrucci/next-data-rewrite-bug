/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: `/sub-app/:path*`,
      destination: `${process.env.SUB_APP}/sub-app/:path*`,
    },
  ],
};

module.exports = nextConfig;