const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    deviceSizes: [428, 540, 640, 768, 1024, 1120],
    unoptimized: true, // Important for `next export`
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'utils'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  output: 'export',
  trailingSlash: true, // Ensures Next.js generates `.html` files
})
