const mongoose = require("mongoose") ;

const chatModel = mongoose.Schema({
    chatName: {type: string} ,
    isGroupChat: {type: Boolean},
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
    latestMessage : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
})