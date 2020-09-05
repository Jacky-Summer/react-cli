module.exports = {
  plugins: [
    require('autoprefixer')({
      // 自动在样式中添加浏览器厂商前缀
      overrideBrowserslist: ['last 2 versions', '>1%'],
    }),
  ],
}
