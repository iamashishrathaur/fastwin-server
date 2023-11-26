const express= require("express");
const bodyParser= require('body-parser')
const cors = require('cors');
const app= express(); 
const userRoute= require('./routes/user.routes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({ origin: '*' }));
userRoute(app)

app.get("/",(req,res)=>{
    res.send("Home page")
    res.set('Access-Control-Allow-Origin', '*');
    console.log("Home page")
});
app.get("/about",(req,res)=>{
    res.send("About page")
    console.log("About page")
});
app.get("/login",(req,res)=>{
    res.send("Login Page")
    console.log("Login Page")
});
app.listen(1000,()=>{
   console.log("Server is running..")
});