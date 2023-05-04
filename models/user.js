const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
})


mongoose.model("User", userSchema);