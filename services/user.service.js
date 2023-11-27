const {Users} = require('../models/index');
const jwt = require('jsonwebtoken');
const create= async (data)=>{
  try{
    const user= await Users.create(data);
    return user;

}catch(err){
   console.log(err.name,err.message)
   if(err.name=='SequelizeValidationError'  || err.name=='SequelizeUniqueConstraintError'){
        return{
            error:err.message
        }
   }
}

}

const getUserByMobile= async(userMobile)=>{
  try{
      const user = await Users.findOne({
          where:{
              mobile:userMobile
          }
      })
      return user

  }catch(err){
      console.log(err);
  }
}

const createToken= (user)=>{
   try{
    return jwt.sign(user,process.env.JWT_KEY,{expiresIn:'2h'})
   }
   catch(err){
    console.log(err)
   }
}


module.exports={
  create,getUserByMobile,createToken
}