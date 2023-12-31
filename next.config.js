/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts|md)x?$/],
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
