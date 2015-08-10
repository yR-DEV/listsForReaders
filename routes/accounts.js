var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/readingList');
var accountCollection = db.get('accounts');

//************* GET HOME PAGE ****************
router.get('/accounts/', function(req, res, next) {
  res.render('accounts/index');
});

//************* GET LOGIN PAGE ******************
router.get('/accounts/login', function(req, res,next) {
  res.render('accounts/login');
});

//************ CREATE NEW ACC *******************
router.get('/accounts/newAccount', function(req, res, next) {
  res.render('accounts/newAccount');
});

//*********** POST NEW ACCOUNT ******************
router.post('/accounts/', function(req, res, next){

  accountCollection.insert({username: req.body.newUserAccountName,
                            password: req.body.newUserPassword1})
  res.redirect('/accounts/');
});

module.exports = router;
