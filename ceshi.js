var express = require('express')
var proxy = require('http-proxy-middleware')
var history = require('connect-history-api-fallback')
  // var config = require('./config/index')
var compression = require('compression')
var app = express()
app.use(compression())

app.use(history({
  index: './index.html'
}))
app.use(express.static('./dist'))
  // var port = process.env.PORT || config.build.port
  // 生产环境的端口号
var port = 8081
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
