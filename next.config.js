/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/404',
                destination: '/not-found',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/not-found',
                destination: '/404',
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            }
        ],
    },

}

module.exports = nextConfig
