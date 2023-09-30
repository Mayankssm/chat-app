const mongoose = require("mongoose") ;

const chatModel = mongoose.Schema({
    chatName: {type: string} ,
    isGroupChat: {type: Boolean},
    users: [
        {
            type: mongoose.Schema
        }
    ]
})