const mongoose = require("mongoose")
const icecreamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        require: true,
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number,
        require: false,
    },
    type: {
        require: true,
        type: String
    },
    keyword: [
        {
            title: {
                require: false,
                type: String
            }
        }
    ],
    like: {
        type: Number,
        require: false
    }

})