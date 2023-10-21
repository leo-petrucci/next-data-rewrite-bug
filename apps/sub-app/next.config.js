/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: `${process.env.SUB_APP}`,
};

module.exports = nextConfig;
