const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // 帮助我们定位到错误信息位置的源代码文件
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    publicPath: '/',
    host: '0.0.0.0',
    compress: true, // 使用gzip压缩
    port: 8080, // 监听的端口号
    historyApiFallback: true,
    overlay: true, // 代码出错弹出浮动层
    hot: true, // 开启热更新
  },
}

module.exports = merge(commonConfig, devConfig)
