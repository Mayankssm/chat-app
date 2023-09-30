const express = require("express") ;
const User = require("../modals/userModel") ;
 
const loginController  = ()=>  {} ;
const registerController = async (req , res)=> {
    const {name , email , password} =  req.body;
        
    //check for all fields
    if(!name || !email || !password){
        res.send(400) ;
        throw Error("All necessary input fields are not being filled") ;
    }
    
    //email aleready exists
    const userExist = await User.findOne({email}) ;
    if(userExist){
        throw Error("email already exists") ;
    }

} ;