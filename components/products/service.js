
/**
 * service: tầng giao tiếp với database
 */

const productModel = require('./model');


/**
 * lấy danh sách tất cả sản phẩm từ database
 */

exports.getProducts = async () => {
  // select * from products
    const products = productModel.find().populate('category_id');
    return products;
}

/**
 * lấy chi tiết 1 sản phẩm
 */
exports.getById = async (id) => {
    const product = data.filter(item => item._id == id)[0];
    return product;
}

/**
 * them moi san pham
 */
 exports.insert = async(product) =>{
   const p = new productModel(product);
   await p.save();
}


exports.delete = async (id) => {
  data = data.filter(item => item._id != id);
}

exports.update = async (id, product) =>{
  data = data.map(item =>{
    if (item._id ==id){
      item ={...item,...product}
    }
    return item;
  })
}

