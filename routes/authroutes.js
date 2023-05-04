const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');
//
require('dotenv').config();
//


router.post('/signup',(req,res)=>{
    res.send('this is signup page page from authroutes');
    console.log(req.body);
})
module.exports = router;