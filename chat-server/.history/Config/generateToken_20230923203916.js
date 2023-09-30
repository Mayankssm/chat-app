const jwt = require("jsonwebtoken") ;

const generateToken = ()=>{
    return jwt.sign({id} , processs.env.JWT_SECRET) ;
}