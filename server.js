const express = require('express');
const mongoose = require('mongoose');

let app = express();


//connect server to mongo server ==> local data base

mongoose.connect("mongodb://0.0.0.0:27017/usersDB",(err)=>{
    if(!err)console.log('db connected');
    else console.log(err)
});

// schema
const Studentschema = new mongoose.Schema({
    name : String,
    email: String,
    password : String,
    age : Number,
    phone : String,
    address: String
});
 

// convert schema to model class
let StudentModel = new mongoose.model("Students",Studentschema);



let newstudent = new StudentModel({
    name : "Mina Magdy",
    email:"mina@gmail.com",
    password:"123456789",
    age : "21",
    phone: "0120259537"
    
}).save();

// courses schema
const coursesschema = new mongoose.Schema({
    name : String,
    describtion: String,
    professor : String,
    number_of_students : String,
    number_of_professor : String,
    
});



// convert schema to model class
let CoursesModel = new mongoose.model("Courses",coursesschema);

let newcourse = new CoursesModel({
    name : "Backend course",
    describtion:"introduction to backend with nodeJs",
    professor:"Dr/Mahmoud Bakry",
    number_of_students:"150",
    number_of_professor:"1"
   
    
}).save();
 

app.listen(3000, function () {
    console.log('server now is opend')
})