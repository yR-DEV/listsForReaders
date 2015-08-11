var express = require('express');
var router = express.Router();
var unirest = require('unirest');
require('dotenv').load();
var goodreads = require('goodreads');
var gr = new goodreads.client({'key': process.env.GOODREADS_DEV_KEY,
                               'secret': process.env.GOODREADS_DEV_SECRET});
var grURL = "https://www.goodreads.com/search.xml?key=";

//*********** GET READING LIST INDEX PAGE *******************
router.get('/readingLists/', function(req, res, next) {
    res.render('readingLists/');
});

//********* GET NEW READING LIST PAGE ***********************
router.get('/readingLists/newList', function(req, res, next) {

  var title = req.body.bookTitleSearch;

  unirest.get("https://www.goodreads.com/api/author_url/Orson%20Scott%20Card?key=" + process.env.GOODREADS_DEV_KEY)
  .end(function(response) {
    console.log(response.body.author_id);
    res.render('readingLists/newList', {response: response.body.author_id});
  });
});

//******** NEW LIST REPOST, API CALLS IN HERE ***************
router.post('/readingLists/newList', function(req, res, next) {
  // unirest.get(grURL + process.env.GOODREADS_DEV_KEY + '&q=Ender%27s+Game')
    res.render('readingLists/newList');
});

module.exports = router;
