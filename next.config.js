/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/random/**',
            },
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/**',
            },
        ]

    }
}

module.exports = nextConfig
