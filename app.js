var jwt = require('jsonwebtoken');

const options = {
    expiresIn: "1h"
};
 // expire time 
const token = jwt.sign({
    id: 1,
    username: "admin"
}, "mySecretKey", options);

console.log(token)

let res= jwt.verify(token, "mySecretKey");
console.log(res)