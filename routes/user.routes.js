const userController= require('../controllers/user.controller');

const route=(data)=>{
    data.post('/user/registration/',userController.addUsers);
    data.post('/user/login/',userController.login)
}

module.exports=route