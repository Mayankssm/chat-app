const express = require("express") ;
const {loginController}

const Router = express.Router() ;

Router.post('/login' , loginController) ;
Router.post('/register' , registerController) ;

module.exports = Router ;