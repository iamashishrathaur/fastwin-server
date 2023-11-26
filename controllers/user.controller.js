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
        return res.status(401).json({
            message:"user not found"
          });
     }
     
     return res.status(201).json({
      message:"successfully login"
    });
    }

module.exports={
    addUsers,login
}