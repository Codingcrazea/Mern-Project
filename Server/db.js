const { cli } = require('envinfo');
const express =require('express');
const app = express();
const mongoose = require('mongoose');
// const mysql = require('mysql');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://learnmongodb:sanskar@cluster0.xv9mkzk.mongodb.net/?retryWrites=true&w=majority";
const url ="mongodb://localhost:27017";
const cors = require('cors');
app.use(cors());



// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database:"laravel"
// });

app.get('/users',(req,res)=>{
    var sql = "SELECT * FROM students";
    db.query(sql,(err,data)=>{
        if(err) {
          return res.json(err);
        }
        return res.json(data);
    });
});

const client = new MongoClient(url);
const dbName = "Learnmongo";
// let dbb;
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       dbb = client.db("newlearn");
//       // Send a ping to confirm a successful connection
//       await client.db("newlearn").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }

//   app.get('/db',(request,response)=>{
//     dbb.collection("newcollection").find({}).toArray((err,result)=>{
//       response.send(result);
//     })
//  });

 app.get('/',(req,res)=>{
     res.send("Hello");
 });

  app.listen(5000,(req,res)=>{
    
    console.log("Server Connected");
  });
  

  