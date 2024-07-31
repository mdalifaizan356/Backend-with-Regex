// //First class Monolithic Architecture
// const express = require("express");       //require ECMA 5 ka syntax he
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const app =express();                           //Properties of express transfer into app
// // const PORT = process.env.PORT||5000
// const PORT = 5000;                            //PORT is a which platform where server is launch

// app.get("/", (req, res)=>{
//     res.send("Hello world");
// });

// // app.listen(
// //     process.env.PORT || 5000,    //It is store in variable
// //     ()=>console.log(`Server running on port number ${process.env.PORT}`.yellow.bold)
// // );

// app.listen(PORT, ()=>
//     console.log(`Server running on port number ${PORT}`.yellow.bold)
// );








//2nd Class  Monolithic Architecture
const express = require("express");       //require ECMA 5 ka syntax he
const colors = require("colors");
const dotenv = require("dotenv").config();
const userdata = require("./utility/userdata.json");

const app =express();                           //Properties of express transfer into app
// const PORT = process.env.PORT||5000
const PORT = 5000;                            //PORT is a which platform where server is launch

app.use(express.json());     //It is inbuilt middleware. jab bhi use dikhayi de to wo middleware he. use ek parameter leta he

// let data = {
//     "name":"John Doe",
//     "age":30,
// }

// app.get(route, function)
app.get("/", (req, res)=>{   //get 2 parameter leta he. 1 route konsa he. 2. us rout pr karna kya he.
    // res.send("WelCome To HomePage");
    // res.send("<h1>Hello World<h1/>");
    // res.send(data);
    res.send(userdata);
});


app.listen(PORT, ()=>
    console.log(`Server running on port number ${PORT}`.blue.bold)
);