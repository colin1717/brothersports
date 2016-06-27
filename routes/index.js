var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
})


router.post('/signup', function(req, res, next) {
  var user = new User({ username: req.body.username });
  User.register(user, req.body.password, function(error) {
    if (error) {
      res.send(error);
    } else {
      req.login(user, function(loginError) {
        if (loginError) {
          res.send('login Error: ' + loginError)
        } else {
          res.redirect('/')
        }
      });
    }
  });
});

/* Create new show */
router.get('/newcontent', checkLoggedIn, function(req, res, next){
  res.render('newcontent');
});

function checkLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    next();
  }else {
    res.redirect('/login');
  }
};

router.post('/login', passport.authenticate('local'), function(req, res, next){
  res.render('newcontent');
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
