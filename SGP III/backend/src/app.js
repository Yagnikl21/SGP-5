
// meet code
const express=require("express")
require("dotenv").config();
const mongoose=require("mongoose")
const app=express()
const multer = require("multer");
const icecreamroute=require("./routes/icecream")
const userroute=require("./routes/user")
app.use(express.json())
require ('./db/conn')


// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

// // app.configure(function() {
// //     //some other code
// // });

// app.use(allowCrossDomain);
app.use("/",userroute);
app.use("/icecream/",icecreamroute)


const port = process.env.PORT || 8080;
app.listen(port,()=>console.log("Backend is running on port",port))

