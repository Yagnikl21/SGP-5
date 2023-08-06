
// meet code
const express=require("express")
require("dotenv").config();
const mongoose=require("mongoose")
const app=express()
const cors = require("cors");
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


<<<<<<< HEAD
=======
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((responce) => {
    console.log("Connected to MongoDB , ", responce.connection.name);
  })
  .catch((err) => console.log(err));
  app.use(
    cors({
      // origin: "http://localhost:3000"
      // methods: "GET,POST,PUT,DELETE",
    })
  );
  
  app.use("/",userroute);
  app.use("/icecream/",icecreamroute)
>>>>>>> 754e6d0a2c580992815c1bbbde90979720ac873a
const port = process.env.PORT || 8080;
app.listen(port,()=>console.log("Backend is running on port",port))

