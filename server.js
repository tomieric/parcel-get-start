const path = require('path')
const express = require('express')
const PORT = 8088

// http-server 实例
const app = express()

// dist 目录
app.use('/dist', express.static('dist'))

app.get('/', (req, res) => {
  res.redirect(`http://localhost:${PORT}/dist`)
})

// 监听端口
module.exports = app.listen(PORT, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`http://localhost:${PORT}`)
})