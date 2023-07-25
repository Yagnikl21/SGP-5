// const mongoose = require("mongoose");

// const icecreamSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     image: {
//         required: true,
//         data: Buffer,
//         contentType: String
//     },
//     quantity: {
//         type: Number,
//         required: false
//     },
//     type: {
//         required: true,
//         type: String
//     },
//     keyword: [
//         {
//             title: {
//                 required: false,
//                 type: String
//             }
//         }
//     ],
//     like: {
//         type: Number,
//         required: false
//     }
// });

// module.exports = mongoose.model("Icecream", icecreamSchema);
const mongoose = require("mongoose");

const icecreamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    keyword: [
        {
            title: {
                type: String,
                required: false
            }
        }
    ],
    like: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model("Icecream", icecreamSchema);

