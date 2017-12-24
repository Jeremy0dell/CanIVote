const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const selenium = require('./selenium')

const app = express()

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', selenium)

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
