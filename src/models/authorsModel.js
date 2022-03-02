// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//  bookName: String,
//     autherName: String,
//     catagory: String,
//     year: Number,


// }, { timestamps: true });

//     module.exports = mongoose.model('Books',bookSchema) //users
    
    
    
    //     type: Sring,
    //     unique: true,
    //     required: true
    // },
    // emailId: String,
    // gender: {
      //  type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    //age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]

// String, Number
// Boolean, Object/json, array

const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    author_id : {
        type:Number,
        required:true
    },
    author_name: String,
    age: Number,
    address : String
},
{timestamps:true})

module.exports = mongoose.model('Author',authorSchema)
