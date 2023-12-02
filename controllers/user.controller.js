const userService = require('../services/user.service');

const serverError={
    message:"Server error",
    data:" ",
    error:"Server error please try again"

}

const addUsers=async(req,res)=>{
    const response= await userService.create(req.body);
    if(response.error){
        return res.status(400).json({
            message:response.error,
            data:{},
            err:'validation error'
        })
    }
    else if(!response){
       return res.status(500).json(serverError);
    }
    return res.status(201).json({
      message: "Successfully create",
      data:response,
      err:{}
    });
}

const login= async (req, res)=>{
    const user= await userService.getUserByMobile(req.body.mobile);
     if(!user){
        return res.status(400).json({
            message:"user not found"
          });
     }
    if(user.password!=req.body.password){
        return res.status(401).json({
            message:"wrong password"
          });
    }
    const token = userService.createToken({id:user.id,mobile:user.mobile})
    if(!token){
        return res.status(500).json(serverError)
    }    
    res.cookie('token', token, {
        maxAge: 3600000, // 1 hour in milliseconds
        expires: new Date(Date.now() + 3600000),
        secure: true,
        httpOnly: true,
      });
     return res.status(201).json({
      message:"successfully login",
      err:false,
      data:token
    });
}
module.exports={
    addUsers,login
}