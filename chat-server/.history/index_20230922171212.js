const express = require("express") ;
const dotenv = require("dotenv") ;

const app = express() ;
dotenv.config() ;

app.get("/" , (req,res) => {
    res.send("API is running...") ;
});

const PORT = process.env.PORT 
app.listen(5000, console.log("server is running")) ;

