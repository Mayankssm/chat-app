const express = require("express") ;

const loginController  = ()=>  {} ;
const registerController = (req , res)=> {
    const {name , email , password} =  req.body;
        
    //check for all fields
    if(!name || !email || !password){
        res.send(400) ;
        throw Error("All necessary input fields are not being filled") ;
    }
    
    //user aleready exists
} ;