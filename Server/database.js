const express =require('express');
const app = express();
const { cli } = require('envinfo');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017'; //Put Your Connection Urls
const client = new MongoClient(url);




// Database Name
const dbName = 'Learnmongo';

async function getData(){
  let result = await client.connect();
  let db = result.db(dbName);
  let collection = db.collection('newcollection');
  await collection.update
  // let response = await collection.find({}).toArray();
  // console.log(response);
}

getData();
app.listen(5000,(req,res)=>{
  console.log('connected on 5000');    
});




// Create a new MongoClient
// const client = new MongoClient(url);

// Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });

// const { cli } = require('envinfo');
// const MongoClient = require('mongodb');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const bodyparse = require('body-parser');
// const express = require('express');
// const app = express();
// // const MongoClient = require('mongodb').MongoClient;

// var url = "mongodb://localhost:27017/mydb";
// mongoose.connect(url);
// const db = mongoose.connection;

// db.on('error',(err)=>{
//    console.log(err);
// });
// db.once('open',()=>{
//    console.log("")
// });

// app.use(morgan('dev'));
// app.use(bodyparse.urlencoded({extended:true}));
// app.use(bodyparse.json());
// const port = 5000;

// app.listen(port ,()=>{
//    console.log("Server Connected");
// });
// // Client.connect(url,(err,db)=>{
// //    if(err){
// //     console.log(err);
// //    }
// //    console.log("Done");
// // });
