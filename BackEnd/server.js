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








// //2nd  serving json data use utility folder
// const express = require("express");       //require ECMA 5 ka syntax he
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const userdata = require("./utility/userdata.json");

// const app =express();                           //Properties of express transfer into app
// // const PORT = process.env.PORT||5000
// const PORT = 5000;                            //PORT is a which platform where server is launch

// app.use(express.json());     //It is inbuilt middleware. jab bhi use dikhayi de to wo middleware he. use ek parameter leta he

// // let data = {
// //     "name":"John Doe",
// //     "age":30,
// // }

// // app.get(route, function)
// app.get("/", (req, res)=>{   //get 2 parameter leta he. 1 route konsa he. 2. us rout pr karna kya he.
//     // res.send("WelCome To HomePage");
//     // res.send("<h1>Hello World<h1/>");
//     // res.send(data);
//     res.send(userdata);
// });


// app.listen(PORT, ()=>
//     console.log(`Server running on port number ${PORT}`.blue.bold)
// );






// //3nd Class serving static HTML file    use public folder
// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const morgan = require("morgan");
// const userdata = require("./utility/userdata.json");
// const fileurlToPath = require("url");
// const path = require("path");

// const app =express();
// // const PORT = process.env.PORT||5000
// const PORT = 5000;

// app.use(express.json());

// // static file wala middleware
// app.use(express.static(path.resolve(__dirname,"./public")));


// app.get("/userdata", (req, res)=>{
//     res.send(userdata);
// }); 

// app.get("/", (req, res)=>{
//     res.sendFile(path.resolve(__dirname,"./public","index.html"));
// });

// app.get("/home", (req, res)=>{
//     res.sendFile(path.resolve(__dirname,"./public","index.html"));
// });

// app.get("/contact", (req, res)=>{
//     res.sendFile(path.resolve(__dirname,"./public","contact.html"));
// });

// app.get("/stopwatch", (req, res)=>{
//     res.sendFile(path.resolve(__dirname,"./public","stopwatch.html"));
// });


// app.listen(PORT, ()=>
//     console.log(`Server running on port number ${PORT}`.blue.bold)
// );







//4th Class Connect DB                
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db")

const app =express();
const PORT = process.env.PORT||5000
// const PORT = 5000;

connectDB();


app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./public","index.html"));
});


app.listen(PORT, ()=>
    console.log(`Server running on port number ${PORT}`.blue.bold)
);