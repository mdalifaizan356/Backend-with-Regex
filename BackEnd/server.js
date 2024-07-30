//Monolithic Architecture
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app =express();
// const PORT = process.env.PORT||5000
const PORT = 5000;

app.get("/", (req, res)=>{
    res.send("Hello world");
});

// app.listen(
//     process.env.PORT || 5000,    //It is store in variable
//     ()=>console.log(`Server running on port number ${process.env.PORT}`.yellow.bold)
// );

app.listen(PORT, ()=>
    console.log(`Server running on port number ${PORT}`.yellow.bold)
);