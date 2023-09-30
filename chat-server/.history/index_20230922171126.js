const express = require("express") ;
const dotenv = require("dotenv") ;

const app = express() ;
dot

app.get("/" , (req,res) => {
    res.send("API is running...") ;
});

app.listen(5000, console.log("server is running")) ;

