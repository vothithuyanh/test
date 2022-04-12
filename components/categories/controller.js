const async = require('hbs/lib/async');
const categoryService = require('./service');
exports.getCategories = async() => {
    const data = await categoryService.getCategories();
    return data;
}