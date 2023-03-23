require('dotenv').config()
const uri = process.env.MONGODB_URI

const port = 4000

const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
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
 
})





