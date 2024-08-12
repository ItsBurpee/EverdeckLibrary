// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
  }
   
  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cf.geekdo-images.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }