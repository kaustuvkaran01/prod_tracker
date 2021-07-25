const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const activity = require('./Activity');
// const ActivitySchema = Schema({
//     name:{
//         type:String,
//     },
//     count:{
//         type:Number
//     }
    
// });

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        unique:true
    },
    avatar:{
        type:String
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
});

module.exports = User = mongoose.model("user",UserSchema);