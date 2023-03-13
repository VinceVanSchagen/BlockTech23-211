// require('dotenv').config()
const port = 4000

const express = require('express')
const ejs = require('ejs')
const path = require('path')
// const uri = process.env.MONGODB_URI;
// const uri = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASS + process.env.DB_NAME + '/' + process.env.DB_HOST + '?retryWrites=true&w=majority';

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://vincevanschagen:VInciusMONGODB70@cluster0.byrbpri.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);



const app = express()

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.use(express.static('static'))
app.set("view engine", "ejs")
app.set("views", "view")

  app.get('/:userQuery',(req, res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery,}});
  });
 


  


app.use(function(req, res, next) {
  res.status(404).render ("./partials/header.ejs", {
hallo:"hallo"
  });
});


app.listen(port, () => {
    console.log(`Mic check on port ` + port)
  })

