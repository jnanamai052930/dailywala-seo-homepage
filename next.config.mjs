/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
