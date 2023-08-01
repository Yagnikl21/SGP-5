const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL ,
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