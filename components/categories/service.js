const catagoryModel = require('./model');

exports.getCategories = async () => {
    return await catagoryModel.find();
}





