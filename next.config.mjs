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
            source: '/blog-landing',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store',
                },
            ],
        },
        {
            source: '/blog/blog-landing',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store',
                },
            ],
        },
        {
            source: '/home',
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
              destination: '/home',
              permanent: true
          }
      ]
    }
};

export default nextConfig;
