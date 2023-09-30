const express = require("express") ;
const {loginController , registerController} = require("../Controllers/userController") ;

const Router = express.Router() ;

Router.post('/login' , loginController) ;
Router.post('/register' , registerController) ;
Router.get('/fetchUser')

module.exports = Router ;