var express = require('express');
var router = express.Router();
var goodreads = require('goodreads');
var gr = new goodreads.client({'key': GOODREADS_DEV_KEY,
                               'secret': GOODREADS_DEV_SECRET});

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
