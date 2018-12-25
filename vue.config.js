module.exports = {
  devServer: {
    open: true,
    host: "localhost",
    port: 8686,
    https: false,
    hotOnly: false,
    proxy: false,
    before: (app)=>{}
  }
}