
const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user");
const Cart = require("../models/cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(express.json());
const port = process.env.PORT || 808


router.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    newUser.password = encryptedPassword;

    const user = await newUser.save();

    // Create a cart for the newly registered user
    const newCart = new Cart({
      user: user._id,
      total: 0, // Initialize total as 0
    });

    const cart = await newCart.save();

    res.status(201).json({ user, cart });
  } catch (e) {
    res.status(400).json({ message: "Error in user registration" });
  }
});

router.post("/login" , async(req,res)=>{
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

module.exports=router