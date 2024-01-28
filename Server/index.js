const express =require('express');
const app = express();
const mysql =require('mysql');
// const MongoClient = require('mongodb').MongoClient;
// const multer = require('multer');
const cors = require('cors');
// const pay_r =require('./routes/payment.js');


// const path = require('path');
// const staticpath = path.join(__dirname,"/public/p.html");
// app.get('/r',(req,res)=>{
//    res.sendFile(staticpath);
// //    res.send();
// });

app.use(cors());
// app.use(express.json());

// app.use('api',pay_r);


app.get("/",(req,res)=>{
    res.send("<h1>This is website </h1>");
});

// Node Js To React code getdata is api suffix that is recieved in Contact.js file use that code to send and recieve data from backend 


app.get("/getdata",(req,res)=>{
    res.send("Hello data is reerved");
});

// module.exports = router;
// app.get("/api",(req,res)=>{
//     const [a] = req.body;
//     res.json({message : "React Connected"});
// });

app.listen(5000,(req,res)=>{
    console.log('connected on 5000');    
});
// const C_string = "mongodb+srv://learnmongo:<Sanskar@123>@cluster0.gyfh240.mongodb.net/?retryWrites=true&w=majority";
// let dbName ="learnmongo";

// app.listen(process.env.PORT,()=>{
//     MongoClient.connect(C_string,(error,client)=>{
//         dbb = client.db(dbName);
//         console.log("Server connected to 5000");
//     })
// });

// var db = mysql.createConnection({
//     host: "mongodb://localhost:27017",
//     user: "root",
//     password: "",
//     database:"laravel"
//   });
  
//   app.get('/users',(req,res)=>{
//       var sql = "SELECT * FROM students";
//       db.query(sql,(err,data)=>{
//           if(err) {
//             return res.json(err);
//           }
//           return res.json(data);
//       });
//   });
  

