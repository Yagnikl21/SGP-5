const express = require("express")
const app = express()

const cors = require('cors')
const icecreamroute = require("./routes/icecream")
const userroute = require("./routes/user")
const cartRoute=require("./routes/cart")

require('./db/conn')
require("dotenv").config();


app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000"
        // methods: "GET,POST,PUT,DELETE",
    })
);
app.use("/", userroute);
app.use("/icecream/", icecreamroute)
app.use("/cart/",cartRoute);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Backend is running on port", port))

