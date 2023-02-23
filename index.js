const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

const port = 4000

app.use(express.static('static'))

app.use(function(req, res, next) {
  res.status(404).send ("<h1>Error 404</h1> <p>self destruct mode in 10 seconds</p>");
});

app.get('/hallo', (req, res) => {
  res.send('<img src="/images/hont_eent.jpg" width="250">Hello World!')
})

app.get('/home/:user/', (req, res) => {
  console.log(`Input from ${req.params.user}`)
  res.send('<img src="/img/hont_eent.jpg" width="250"><h1>Hello ' + req.params.user + '</h1>')
})

app.get('/', function(request, response) {
  response.render('index')
})

app.set('views', path.join(__dirname, 'views'))
app.set('view egine', 'ejs')

app.listen(port, () => {
    console.log(`Mic check on port ` + port)
  })

