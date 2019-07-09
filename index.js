var express = require('express')
var app = express()
const port = process.env.PORT || 3000
app.get('/', function (req, res) {
  res.send('Hello Digital Ocean!')
})

app.listen(port, function () {
  console.log('Magic is happening on port 3000!')
})
