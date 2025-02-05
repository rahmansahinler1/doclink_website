/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add dynamic header configuration
    async headers() {
        return [
            {
                source: '/api/auth/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    },
                    {
                        key: 'Pragma',
                        value: 'no-cache',
                    },
                    {
                        key: 'Expires',
                        value: '0',
                    },
                ],
            },
        ];
    },
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        unoptimized: true
    },
  };
  
  module.exports = nextConfig;