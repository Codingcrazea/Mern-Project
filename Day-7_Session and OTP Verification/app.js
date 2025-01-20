import express from 'express';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser'
import cors from 'cors'
import session from 'express-session'

import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import productRoute from './routes/productRoute.js';
import otpRoute from './routes/otpRoute.js'

const app = express();

//to extract body data from request(POST, PUT, DELETE, PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to allow cors request
app.use(cors())

// to allow file input
app.use(fileUpload());

//session
app.use(session({secret:'asjaeukdaeukdae', resave: false,
    saveUninitialized: false}))

app.use("/user",userRoute);
app.use("/category",categoryRoute);
app.use("/product",productRoute);
app.use("/otp",otpRoute);

app.listen(3001);
console.log("Server Invoked at link http://localhost:3001");

/*
Ex : 
Create Request : http://localhost:3001/user/saveUser
                 http://localhost:3001/user/loginUser
                 http://localhost:3001/user/updateUser?
                 http://localhost:3001/user/deleteUser?
                 http://localhost:3001/user/viewAllUserList 

*/ 