const express=require("express")
const mongoose=require("mongoose")
const app=express()
const multer = require("multer");

app.use(express.json())

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
const port = process.env.PORT || 8080;
app.listen(port,()=>console.log("Backend is running on port",port))