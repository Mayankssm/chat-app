const express = require("express") ;

const loginController  = ()=>  {} ;
const registerController = (req , res)=> {
    const {name , email , password} =  req.body;

    if(!name || !email || !password){
        res.send()
        throw Error("All necessary input fields are not being filled") ;
    }
} ;