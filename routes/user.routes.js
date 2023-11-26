const userController= require('../controllers/user.controller');

const route=(data)=>{
    data.post('/user/registration/',userController.addUsers);
    data.get('/user/login/',userController.login)
}

module.exports=route