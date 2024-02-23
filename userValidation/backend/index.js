const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const collection = require("./mongo")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/ReactMiniProject")


// signup
app.post("/signup",(req,res)=>{
    collection.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

// login
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    collection.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Login Success")
            }
            else{
                res.json("Password is Incorrect")
            }
        }
        else{
            res.json("User not found")
        }
    })
})

app.listen(8000,()=>{
    console.log("server running");
})