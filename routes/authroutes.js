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
    //console.log(req.body);
    const  {name, email, password, dob} = req.body;
    if (!email || !password || !name || !dob){
        return res.status(422).send({error: "please fill all details"});
    }

    User.findOne({ email: email})
    .then(
        async (saveduser) =>{
            if (saveduser){
            return res.status(422).send({error: "email Exist"});
        }
        const user = new user({
            name,
            email,
            password,
            dob
        })
        try{
            await user.save();
            res.send({ message: "user saved"});
        }
        catch (err){
            console.log('db err', err);
            return res.status(422).send({error: err.message});
        }
    }
    )
})
module.exports = router;