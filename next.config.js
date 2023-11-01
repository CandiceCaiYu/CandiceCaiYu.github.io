/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    experimental: {esmExternals: 'loose'},
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

module.exports = nextConfig

