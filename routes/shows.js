var express = require('express');
var router = express.Router();
var Show = require('../models/show');
var passport = require('passport');
var User = require('../models/user');

/* GET /Shows */
router.get('/', function(req, res, next) {
  Show.find({}, function(err, shows){
    if (err) {
      res.status(500).send();
    } else {
      res.json(shows);
    }
  });
});

function checkLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    next();
  }else {
    res.redirect('/login');
  }
};

/* Create new show */
router.get('/new', checkLoggedIn, function(req, res, next){
  res.render('showsforms/new');
});

/* POST /shows */
router.post('/', checkLoggedIn, function(req, res, next) {
  var show = new Show(req.body);
  show.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.redirect('/');
    }
  });
});

//middleware get show by id
router.use('/:showId', function(req, res, next){
  Show.findOne({ '_id': req.params.showId }, function (err, show) {
    if (err) {
      res.status(500).send();
    } else {
      if (show) {
        res.show = show;
        next();
      } else {
        res.status(404).send();
      }
    }
  });
});

/*  GET /shows/:showID */
router.get('/:showId', function(req, res, next) {
  res.json(res.show);
});

/* PUT /shows/:showId */
router.put(':/showId', function(req, res, next){
  Show.findByIdAndUpdate(req.params.studentId, { $set: req.body }, function(err, show){
    if (err) {
      res.status(500).send();
    } else {
      Show.findOne({ '_id': req.params.studentId }, function(err, show){
        if (err) {
          res.status(500).send();
        } else {
          if (show) {
            res.show = show;
            res.json(res.show);
          } else {
            res.status(404).send();
          }
        }
      });
    }
  });
});

/* Delete /shows */
router.delete(':showId', function(req, res, next){
  Show.remove({'_id': res.show._id}, function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
