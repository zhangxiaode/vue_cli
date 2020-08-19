const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title= "vue-cli"
      return args
    })
    config.resolve.alias.set('@', resolve('src'))
    // config.module.rule('images').uses.clear()
    // config.module.rule('images').use('file-loader').loader('file-loader').options({esModule: false,})
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
        target: 'http://localhost:7001',
        ws: false,
        changeOrigin: false
      }
    }
  }
}
