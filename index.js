const express = require('express')
// const ejs = require('ejs')
const path = require('path')

const app = express()

const port = 4000



app.use(express.static('static'))
app.set("view engine", "ejs")
app.set("views", "view")

var userlist = [
  {
    id: 'Vincius70',
    name: 'Vince',
    description: 'retired sage main'
  },
  {
    id: 'ellie',
    name: 'iridescent',
    description: 'instalock jett'
  }
  ]
  
  app.get('/lijst', function users(req, res) {
    res.render('list.ejs', {username: userlist[0].name})
  })



  


app.use(function(req, res, next) {
  res.status(404).send ("<h1>Error 404</h1> <p>self destruct mode in 10 seconds</p> ");
});

app.listen(port, () => {
    console.log(`Mic check on port ` + port)
  })

