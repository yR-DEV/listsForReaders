var express = require('express');
var router = express.Router();

router.get('/accounts/', function(req, res, next) {
  res.render('accounts/');
});

router.get('/accounts/login', function(req, res,next) {
  res.render('accounts/login');
});

router.get('/accounts/newAccount', function(req, res, next) {
  res.render('accounts/newAccount');
});

router.post('/accounts/', function(req, res, next){
  res.redirect('/accounts/');
});

module.exports = router;
