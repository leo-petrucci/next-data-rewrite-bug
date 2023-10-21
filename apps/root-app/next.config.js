/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: `/sub-app`,
      destination: `${process.env.SUB_APP}/sub-app`,
    },
    {
      source: `/sub-app/:path*`,
      destination: `${process.env.SUB_APP}/sub-app/:path*`,
    },
    {
      source: `/_next/data/:release/sub-app/:path*`,
      destination: `${process.env.SUB_APP}/_next/data/:release/sub-app/:path*`,
    },
  ],
};

module.exports = nextConfig;
