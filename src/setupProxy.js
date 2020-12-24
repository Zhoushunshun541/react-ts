const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/public', {
    target:process.env.api,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/public": "/"
    }
  }))
}