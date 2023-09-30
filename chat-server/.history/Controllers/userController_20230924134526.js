const express = require("express") ;
const UserModel = require("../modals/userModel") ;
const expressAsyncHandler = require("express-async-handler") ;
const generateToken = require("../Config/generateToken");

const loginController  = expressAsyncHandler(async(req , res)=>  {
        console.log(req.body);
        const {name , password} =  req.body;

        const user = await UserModel.findOne({name}) ;

        console.log("fetched user data" , user);
        console.log(await user.matchPassword(password));

        if(user && (await user.matchPassword(password))){
            const response = ({
                _id : user._id,
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user._id), 
            });
        }
        else{
            throw new Error("invalid username or password");
        }
}) ;



const registerController = expressAsyncHandler (async (req , res)=> {
    const {name , email , password} =  req.body;
        
    //check for all fields
    if(!name || !email || !password){
        res.send(400) ;
        throw Error("All necessary input fields are not being filled") ;
    }
    
    //email aleready exists
    const userExist = await UserModel.findOne({email}) ;
    if(userExist){
        throw Error("email already exists") ;
    }
    //username already taken 
    const userNameExist = await UserModel.findOne({name}) ;
    if(userNameExist){
        throw Error("username is already taken") ;
    }

    //create an entry in the db
    const user = await UserModel.create({name , email , password}) ;

    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id), 
        }) ;
    }
    else{
        res.status(400) ;
        throw new Error("Registration Error") ;
    }
}) ;

module.exports = {loginController , registerController} ;