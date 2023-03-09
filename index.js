const express = require('express')
const ejs = require('ejs')
const path = require('path')
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://vincevanschagen:VInciusMONGODB.70@cluster0.byrbpri.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const app = express()

const port = 4000

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");
    // find code goes here
    const cursor = coll.find({ hasRings: false, mainAtomsphere: "n" });
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

