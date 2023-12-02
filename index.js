require('dotenv').config();
const express= require("express");
const bodyParser= require('body-parser')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app= express(); 
const userRoute= require('./routes/user.routes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({ origin: ['http://localhost:3000'], methods:['POST','GET'],credentials:true }));

userRoute(app)

const verifyUser = (req, res, next) => {
  const token =  req.cookies && req.cookies.token; // Corrected from res.cookies to req.cookies
  if (!token) {
    return res.json({ error: "You are not authenticated" });
  } else {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.json({ error: "Token is not valid" });
      } else {
        next();
      }
    });
  }
};
app.use(cookieParser());
app.get('/',verifyUser,(req,res)=>{
res.send({status:"Success"})
});

const PORT= process.env.PORT  || 1000;
app.listen(PORT,()=>{
   console.log("Server is running..")
});