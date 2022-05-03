/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.freecodecamp.org', 'www.twitch.tv', 'static-cdn.jtvnw.net'],
  },
}

module.exports = nextConfig
