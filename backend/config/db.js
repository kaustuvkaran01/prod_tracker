const mongoose = require('mongoose');
const db = "mongodb+srv://kkaran3103:kkaran3103@prodtracker.ilqs8.mongodb.net/prod?retryWrites=true&w=majority"
const connectDB = async () => {
    try{
        mongoose.connect(db,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
        });
        console.log("MongoDB Connected ....")
    } catch(err) {
        console.error(err.message);
    }
}

module.exports = connectDB;