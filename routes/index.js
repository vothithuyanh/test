var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const UserController = require('../components/users/controller');

/* page: login */
// http://localhost:3000/dang-nhap
// method: get
router.get('/dang-nhap', function (req, res, next) {
  res.render('login');
});

router.get('/thong-ke', function (req, res, next) {
  res.render('statistical');
});

router.get('/danh-sach-nguoi-dung', function (req, res, next) {
  res.render('userList');
});


/* page: login */
// http://localhost:3000/dang-nhap
// method: post
router.post('/dang-nhap', async function (req, res, next) {
  // xử lý login
  // đọc email, password từ body
  const { email, password } = req.body;
  // kiểm tra email, password
  const result = await UserController.login(email, password);
  // nếu đúng: chuyển qua trang sản phẩm
  if (result) {
    res.redirect('/san-pham');
  }
  // nếu sai: vẫn ở trang login
  else {
    res.redirect('/dang-nhap');
  }
});

/* page: logout */
// http://localhost:3000/dang-xuat
// method: get
router.get('/dang-xuat', function (req, res, next) {
  // đăng xuất thành công chuyển sang trang đăng nhập
  res.redirect('/dang-nhap');
});


















// http://localhost:3000/canh-day/10/chieu-cao/5
router.get('/canh-day/10/chieu-cao/5', function(req, res, next) {
  const {canhday = 10, chieu_cao = 5} = req.query;
  const dttg = 0.5 * canhday*chieu_cao;
  //liên kết tới trang index.hbs
  res.render('index', { dttg: dttg });
});

module.exports = router;

// post, put, delete

//req

//query:?abc=123
//params: /:id
//body:

//res
//render: tạo 1 view: hbs/ejs/pug...
//json: API (application programming interface)
