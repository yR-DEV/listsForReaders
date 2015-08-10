var express = require('express');
var router = express.Router();

//*********** GET READING LIST INDEX PAGE *******************
router.get('/readingLists/', function(req, res, next) {
  res.render('readingLists/');
});

//********* GET NEW READING LIST PAGE ***********************
router.get('/readingLists/newList', function(req, res, next) {
  res.render('readingLists/newList');
});

//******** NEW LIST REPOST, API CALLS IN HERE ***************
router.post('/readingLists/newList', function(req, res, next) {
  var title = req.body.bookTitleSearch;
  res.render('readingLists/newList', {title: title});
});

module.exports = router;
