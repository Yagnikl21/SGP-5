const express = require("express");
require("../src/db/conn")
const User = require("../src/models/user")
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(express.json());
const port = process.env.PORT || 8080
app.post("/signup", async(req,res)=>{
    try{
        const newUser = new User(req.body)
        const encryptedPassword = await bcrypt.hash(req.body.password , 10);
        newUser.password = encryptedPassword;
        const users = await newUser.save({});
        res.status(201).send(users);
    }catch(e){
        res.status(400).send(e);
    }
})
app.post("/login" , async(req,res)=>{
    const{email , password} = req.body;
    try {
        const existingUser = await User.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({message:"User Not Found"});
        }
        const isMatchedPassword = await bcrypt.compare(password, existingUser.password);
        if(!isMatchedPassword){
            return res.status(400).json({message:"Invalid Credential"});
        }
        const token = jwt.sign({email:existingUser.email},"KLklwerklLKJekrjwlkjSDA",{expiresIn:5})
        res.status(201).json({users:existingUser , token:token});
       
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Something Went Wrong"})    
    }
})
app.get("/" , async(req,res)=>{
    res.send("HEllo");
})

app.listen(port , ()=>{
    console.log(`connected on ${port}`);
})