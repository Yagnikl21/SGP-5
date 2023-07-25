const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017" ,
    {
        // useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log("DB connection HO gaya");
}).catch((e)=>{
    console.log(e);
}) 