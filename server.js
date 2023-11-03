const express = require('express');
const mongoose = require('mongoose');

let app = express();


//connect server to mongo server ==> local data base

mongoose.connect("mongodb://0.0.0.0:27017/usersDB",(err)=>{
    if(!err)console.log('db connected');
    else console.log(err)
});

// schema
const userschema = new mongoose.Schema({
    name : String,
    age : Number,
    phone : String,
    address: String
});
 

// convert schema to model class
let userModel = new mongoose.model("users",userschema);



let newuser = new userModel({
    name : "Mina Magdy",
    age : "21",
    phone: "0120259537"
    
}).save();


let mina = new userModel({
name:"mina",
age:"21",
address:"شارع العشرينى حى السلام"

}).save();




app.listen(3000, function () {
    console.log('server now is opend')
})