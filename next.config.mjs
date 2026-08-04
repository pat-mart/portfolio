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
          {
              source: '/blog/8MorpoiEJUWucYJO9vYA',
              destination: '/blog/ten-albums-i-like',
              permanent: true
          },
          {
              source: '/blog/Sxmhgb5Wj5ogfOy5xO8w',
              destination: '/blog/back-2-school-and-fwoc',
              permanent: true
          },
          {
              source: '/blog/pE2rjC46L5iwaIA2Ockh',
              destination: '/blog/boston',
              permanent: true
          },
          {
              source: '/blog/v2LNAFhyFp2mRYcA3RKi',
              destination: '/blog/cafe-luxembourg',
              permanent: true
          }
      ]
    }
};

export default nextConfig;
