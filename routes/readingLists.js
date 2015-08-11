var express = require('express');
var router = express.Router();
var unirest = require('unirest');
require('dotenv').load();
var goodreads = require('goodreads');
var fs = require('fs');
var parseString = require('xml2js').parseString;
var gr = new goodreads.client({'key': process.env.GOODREADS_DEV_KEY,
                               'secret': process.env.GOODREADS_DEV_SECRET});
var tmp, x;
//*********** GET READING LIST INDEX PAGE *******************
router.get('/readingLists/', function(req, res, next) {
  res.render('readingLists/');
});

//********* GET NEW READING LIST PAGE ***********************
router.get('/readingLists/newList', function(req, res, next) {
  unirest.get('https://www.goodreads.com/search/index.xml?key=' + process.env.GOODREADS_DEV_KEY + '&q=Ender%27s+Game')
  .header('Accept', 'application/json')
  .end(function(response) {
    // console.log(response);
    // var tmp = JSON.parse(response)
    // console.log(response);
    console.log(response);
    // parseString(raw, function(err, obj) {
    //   console.log(obj.GoodreadsResponse.search[0].results[0].work);
    // })
    res.render('readingLists/newList', {tmp: tmp});
  });
});

//******** NEW LIST REPOST, API CALLS IN HERE ***************
router.post('/readingLists/newList', function(req, res, next) {
  var title = req.body.bookTitleSearch;
  res.render('readingLists/newList', {title: title});
});

module.exports = router;
