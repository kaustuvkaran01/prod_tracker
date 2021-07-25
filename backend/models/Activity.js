const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = Schema({
    name:{
        type:String,
    },
    count:{
        type:Number
    }
    
});

module.exports = Activity = mongoose.model("activity",ActivitySchema);