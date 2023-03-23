<<<<<<< HEAD
// require('dotenv').config()

// const url = process.env.URI;
=======
require('dotenv').config()
const uri = process.env.MONGODB_URI

>>>>>>> 3dc115f (mongodb geinitialiseerd)
const port = 4000

const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
<<<<<<< HEAD
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
=======
const { MongoClient } = require("mongodb");


app.use(express.static('static'))
app.set("view engine", "ejs")
app.set("views", "view")

// MongoDB
 

console.log('uri', uri)
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("Profiel");
    const coll = db.collection("users");

    // insert code goes here
    const docs = [
      {userName: "Vincius70", firstName: "Vince", lastName:"van Schagen", age: 21, gender: "male"},
      {userName: "bertinNN", firstName: "Bert", lastName:"Lammes", age: 17, gender: "male"},
      {userName: "Emma_2000", firstName: "Emma", lastName:"Heeksen", age: 22, gender: "female"},
    ];

    const result = await coll.insertMany(docs);

    // display the results of your operation
    console.log(result.insertedIds);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Einde MongoDB

// routes
app.get('/:userQuery',(req, res)=>{
>>>>>>> 3dc115f (mongodb geinitialiseerd)
 
})


<<<<<<< HEAD
=======


>>>>>>> 3dc115f (mongodb geinitialiseerd)

