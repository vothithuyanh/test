var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categories/controller');
const upload = require('../middle/upload');

/* 
page: list
http://localhost:3000/san-pham
method: get
detail: get list products
*/
router.get('/', async function (req, res, next) {
  // lấy danh sách sản phẩm
  const products = await productController.getProducts();
  res.render('products', { products: products });
});

/* 
page: list
http://localhost:3000/products
method: post
detail: insert new product
*/
// middleware
router.post('/', [upload.single('image')], async function (req, res, next) {
  // xử lý thêm mới sản phẩm
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://localhost:3000/images/${file.filename}`;
  }
  body = { ...body, image };
  await productController.insert(body);
  res.redirect('/san-pham');
});

/* 
page: list
http://localhost:3000/san-pham/insert
method: post
detail: insert new product
*/
router.get('/insert', async function (req, res, next) {
  // hiển thị trang thêm mới
  const categories = await categoryController.getCategories();
  res.render('product_insert', { categories: categories });
});

/* 
page: list
http://localhost:3000/san-pham/:id/delete
method: delete
detail: delete product
*/
router.delete('/:id/delete', async function (req, res, next) {
  // xử lý xóa sản phẩm
  const { id } = req.params;
  await productController.delete(id);
  // trả về dữ liệu dạng json
  res.json({ result: true });

});

/* 
page: list
http://localhost:3000/san-pham/:id/edit
method: get
detail: get one product
*/
router.get('/:id/edit', async function (req, res, next) {
  // xử lý lấy 1 sản phẩm
  const { id } = req.params;
  const product = await productController.getById(id);
  const categories = await categoryController.getCategories();
  res.render('product', { product: product, categories: categories });
});

/* 
page: list
http://localhost:3000/san-pham/:id/edit
method: put
detail: update one product
*/
router.post('/:id/edit', [upload.single('image')], async function (req, res, next) {
  // xử lý cập nhật 1 sản phẩm
  let { params, file, body } = req;
  delete body.image;
  if (file) {
    let image = `http://localhost:3000/images/${file.filename}`;
    body = { ...body, image };
  }
  await productController.update(params.id, body);
  res.redirect('/san-pham');
});

module.exports = router;