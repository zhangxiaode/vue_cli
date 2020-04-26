// const path = require('path');
module.exorts = {
  mode: 'development', // development production
  entry: "./src/index",
  output: {
    path: "./dist/js",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'], // 能够使用户在引入模块时不带扩展
    alias: { // 创建 import 或 require 的别名，来确保模块引入变得更简单
      // "@": path.resolve(__dirname, 'src/'),
    },
  },
  externals: ['vue', 'vue-property-decorator'],
  optimization: { // 告知 webpack 使用 TerserPlugin 压缩 bundle 默认为true
    minimize: false,
  },
  scripts: {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack --config webpack.config.js"
  }
}