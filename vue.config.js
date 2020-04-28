const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.ts', '.json'],
            alias: {
                '@': resolve('src')
            }
        },
    },
    publicPath: './',
    assetsDir: './',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        open: false,
        proxy: {
            '/apis': {
                target: 'http://192.168.0.215:8093',
                ws: false,
                changeOrigin: false
            }
        }
    }
}