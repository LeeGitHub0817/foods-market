module.exports = {
  devServer: {
    open: true,
    port: 8686,
    https: false,
    hotOnly: false,
    proxy: false,
    before: (app)=>{}
  },
  lintOnSave: false, //关闭eslint
  chainWebpack: (config) => { // 添加打包分析插件
    if(process.env.NODE_ENV == 'production') {
      config.plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .tap((args) => {
          return [{
            analyzerMode: 'static'
          }]
        })
        .end();
      config.plugins.delete('prefetch');
    }
  } 
}