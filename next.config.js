const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: false,
  i18n,
  env: {
    INFURA_KEY: process.env.NEXT_PUBLIC_INFURA_KEY
  },
  images: {
    domains: ['cloudflare-ipfs.com', 'assets.coingecko.com']
  }
}
