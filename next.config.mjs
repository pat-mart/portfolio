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
    headers: () => [
        {
            source: '/screens/blog-landing',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store',
                },
            ],
        },
        {
            source: '/screens/blog/',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store',
                },
            ],
        }
    ],

    async redirects() {
      return [
          {
              source: '/',
              destination: '/screens/home',
              permanent: true
          }
      ]
    }
};

export default nextConfig;
