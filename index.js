// require('dotenv').config()

// const url = process.env.URI;
const port = 4000

const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
// mongoDB initialiseren
const { connectToDb, getDb } = require('./db')

app.use(express.static('static'))
app.set("view engine", "ejs")
app.set("views", "view")


// MongoDB
let db 
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Mic check on port ` + port)
    })
    db = getDb()
  }
})
// Einde MongoDB

// routes
// app.get('/:userQuery',(req, res)=>{
app.get('/users', (req, res) => {
  let users = []

  db.collection('namen')  
    .find()
    .sort({ name: 1})
    .forEach(user => users.push(user))
    .then(() => {
      res.status(200).json(users)
    })
    .catch(() => {
      res.status(500).json({error: 'Kon documenten niet ophalen'})
    })
})

//   res.render('index',{data : {userQuery: req.params.userQuery,}});
// });

// app.use(function(req, res, next) {
//   res.status(404).render ("./404.ejs", {
// hallo:"hallo"
//   });
// });
 



