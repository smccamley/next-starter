// next.config.js
const withCSS = require("@zeit/next-css")

let STRIPE_PUBLIC_APIKEY = process.env.STRIPE_TEST_PUBLIC_APIKEY

if (process.env.NODE_ENV === "production") {
  STRIPE_PUBLIC_APIKEY = process.env.STRIPE_PUBLIC_APIKEY
}

module.exports = withCSS({
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    STRIPE_PUBLIC_APIKEY,
    ENV: process.env.NODE_ENV,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    })

    return config
  },
})
