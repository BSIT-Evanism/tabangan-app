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

}

module.exports = nextConfig
