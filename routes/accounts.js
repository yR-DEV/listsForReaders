var express = require('express');
var router = express.Router();

router.get('/accounts/login', function(req, res,next) {
  res.render('accounts/login');
});

module.exports = router;
