/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "womenintechnology.africa",
      },
      {
        protocol: "https",
        hostname: "womenintechnology.africa",
      },
    ],
  },
};

export default nextConfig;
