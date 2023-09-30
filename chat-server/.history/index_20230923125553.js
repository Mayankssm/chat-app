const express = require("express") ;
const dotenv = require("dotenv") ;
const { default: mongoose, connect } = require("mongoose");

const app = express() ;
dotenv.config() ;


const connectDb = async() => {
    try{

    }
    catch(err){
        
    }
    const connect = mongoose.connect(process.env.MONGO_URI) ;
    console.log("server is connected to DB");
}
connectDb() ;


app.get("/" , (req,res) => {
    res.send("API is running...") ;
});
 
// console.log(process.env.MONGO_URI);
// const MONGO_URI

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log("server is running")) ;

