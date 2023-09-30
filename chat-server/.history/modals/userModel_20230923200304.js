const mongoose = require("mongoose") ;

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
        type: string,
        required: true,
    },
},
{
    timeStamp: true,
}
);

const User = mongoose.model("User", userModel) ;
module.exports = User ;