
// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb+srv://vincevanschagen:QCxrCgjj0HJ8YZ7C@profiel-data.g3l9rhc.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     // database and collection code goes here
//     const db = client.db("Profiel");
//     const coll = db.collection("users");

//     // insert code goes here
//     const docs = [
//       {userName: "Vincius70", firstName: "Vince", lastName:"van Schagen", age: 21, gender: "male"},
//       {userName: "bertinNN", firstName: "Bert", lastName:"Lammes", age: 17, gender: "male"},
//       {userName: "Emma_2000", firstName: "Emma", lastName:"Heeksen", age: 22, gender: "female"},
//     ];

//     const result = await coll.insertMany(docs);

//     // display the results of your operation
//     console.log(result.insertedIds);

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);





const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://vincevanschagen:QCxrCgjj0HJ8YZ7C@profiel-data.g3l9rhc.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
    connectToDb: (cb) => {
      MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    
    },
    getDb: () => dbConnection
}
