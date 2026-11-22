/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
            }
        ]
    },
    async redirects() {
      return [
          {
              source: '/',
              destination: '/home',
              permanent: true
          },
      ]
    }
};

export default nextConfig;
