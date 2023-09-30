const mongoose = require("mongoose") ;

const userModel = mongoose.Schema({

    name: {
        type: string,
        required: true,
    },
    email
});