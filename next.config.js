const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// module.exports = withBundleAnalyzer({
//   experimental: {
//     nextScriptWorkers: true,
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/contato',
//         permanent: true,
//       },
//     ]
//   },
// })
