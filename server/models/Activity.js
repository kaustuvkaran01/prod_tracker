const {model, Schema} = require('mongoose');

const activitySchema = new Schema({
    title: String,
    count: Number,
    user:{
        type:Schema.Types.ObjectID,
        ref:'users'
    }
});

module.exports = model('Activity',activitySchema);