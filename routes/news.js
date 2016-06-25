var express = require('express');
var router = express.Router();
var News = require('../models/news');

/* Get /news */
router.get('/', function(req, res, next){
  News.find({}, function(err, news){
    if (err) {
      res.status(500).send();
    } else {
      res.json(news);
    }
  });
});

/* Create new news Post */
router.get('/new', function(req, res, next){
  res.render('newsforms/new');
})

/* Post /news */
router.post('/', function(req, res, next){
  var news = new News(req.body);
  news.save(function(err){
    if (err) {
      res.status(500).send();
    } else {
      res.redirect('/');
    }
  });
});

/* Middleware get news by id */
router.use('/:newsId', function(req, res, next){
  News.findOne({'_id': req.params.newsId }, function (err, news) {
    if (err) {
      res.status(500).send();
    } else {
      if (news) {
        res.news = news;
        next();
      } else {
        res.status(404).send();
      }
    }
  });
});

/* Get news/:newsId */
router.get('/:newsId', function(req, res, next){
  res.json(res.news);
})

/* Put skip for now */

/* Delete /news */
router.delete(':newsId', function(req, res, next){
  News.remove({'_id': res.news._id}, function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
