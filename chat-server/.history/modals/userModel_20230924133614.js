const mongoose = require("mongoose") ;
var bcr
const userModel = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timeStamp: true,
}
);

userModel.methods.matchPassword

const User = mongoose.model("User", userModel) ;
module.exports = User ;