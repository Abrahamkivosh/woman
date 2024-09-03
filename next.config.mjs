/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cleanstart-cms.clouderp.ke",
      },
      {
        protocol: "https",
        hostname: "assets.clouderp.ke",
      },
    ],
  },
};

export default nextConfig;
