const express = require('express')
const path = require('path')
const app = express()
const port = 4000



app.use(express.static('static'))
app.set("view engine", "ejs")
app.set("views", "view")

app.use(function(req, res, next) {
  res.status(404).send ("<h1>Error 404</h1> <p>self destruct mode in 10 seconds</p> ");
});

app.listen(port, () => {
    console.log(`Mic check on port ` + port)
  })

