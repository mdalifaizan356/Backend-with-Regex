const mongoose = require("mongoose");
const colors = require("colors");

//asynchronous Javascript
const connectDB = async()=>{
    try{
        //connect database by mongodb atlas 
       await mongoose.connect(process.env.MONGO_URL);
       console.log("Database connected".bgMagenta.white);

    }
    catch(e){
        console.log(`Error Occured: ${e}`.bgRed.white);

    }
}

module.exports = connectDB;
