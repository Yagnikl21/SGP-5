const express=require("express")
const router=express.Router();
const icecream=require("../model/icecream")

//create all ice cream
// router.post("/cice",async(req,res)=>{
//     try{
//         const newice=await icecream.create(req.body);
//         res.status(201).json(newice)
//     }
//     catch(err){
//         res.status(500).json({err})
//     }
// })

// Retrieve all ice cream objects
router.get("/allice", async (req, res) => {
    try {
      const allIceCreams = await icecream.find();
      const modeifiedicecream=icecream.map((ice)=>({
        _id:ice._id,
        name:ice.name,
        price:ice.price,
        image:`data:${ice.image.contentType};base64,${ice.image.data.toString(
            "base64")}`,
        quantity:ice.quantity,
        type:ice.type,
        keyword:ice.keyword,
        like:ice.like
      }))
      res.status(200).json(modeifiedicecream);
    } catch (err) {
      res.status(500).json({ err });
    }
  });
  
  module.exports = router;