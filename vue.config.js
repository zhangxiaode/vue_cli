const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  publicPath: './',
  assetsDir: './',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    https: false,
    open: false,
    proxy: {
      '/apis': {
        target: 'http://localhost:9000',
        ws: false,
        changeOrigin: false
      }
    }
  }
}
