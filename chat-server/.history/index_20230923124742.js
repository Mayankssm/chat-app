const express = require("express") ;
const dotenv = require("dotenv") ;
const { default: mongoose } = require("mongoose");

const app = express() ;
dotenv.config() ;

app.get("/" , (req,res) => {
    res.send("API is running...") ;
});

// console.log(process.env.MONGO_URI);
// const MONGO_URI

mongoosec.connect(process.env.MONGO_URI) ;

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log("server is running")) ;

