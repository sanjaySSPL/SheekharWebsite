/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;


