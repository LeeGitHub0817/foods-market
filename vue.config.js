module.exports = {
  devServer: {
    open: true,
    port: 8686,
    https: false,
    hotOnly: false,
    proxy: false,
    before: (app)=>{}
  },
  lintOnSave: false //关闭eslint
}