/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "seed-mix-image.spotifycdn.com",
        protocol: "https",
      },
      {
        hostname: "mosaic.scdn.co",
        protocol: "https",
      },
      {
        hostname: "image-cdn-ak.spotifycdn.com",
        protocol: "https",
      },
      {
        hostname: "thisis-images.spotifycdn.com",
        protocol: "https",
      },
      {
        hostname: "i.scdn.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
