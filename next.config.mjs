/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for SPA deployment
  output: process.env.DOCKER_BUILD ? "standalone" : "export",
  trailingSlash: true,
  
  // Optimize images for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
