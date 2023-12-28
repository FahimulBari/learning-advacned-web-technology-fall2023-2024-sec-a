/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/logindemo.html',
        },
      ]
    },
  }