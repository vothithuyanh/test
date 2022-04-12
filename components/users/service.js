const userModel = require('./model');



// tầng gọi database
exports.login = async (email) => {
    // select id, username, password from users where username = ''
    const user = await userModel.findOne({email:email}, 'id email password');
    return user;
}



































// mảng dữ liệu user
// var data = [
//     { id: 1, email: 'admin@gmail.com', password: '123', name: 'An Tran' }
// ]