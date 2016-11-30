var express = require('express');
var router = express.Router();
var passport = require('passport');
var signupController = require('./signupController.js');
var Geek = require('../models/')["Geek"];
var Seeker = require('../models/')["Seeker"];
var Skill = require('../models/')["Skill"];
var User = require ('../models/')["User"];
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var renderJSON = false;

if (config.renderJSON == "1") {
  renderJSON = true;
}

router.get("/geeks", function(req, res) {
    Geek.findAll()
    	.then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('geeks', {geeks: data});          
        }
    });
});

router.get("/seekers", function(req, res) {
    Seeker.findAll()
    	.then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('seekers', {seekers: data});          
        }
    });
});

router.get("/skills", function(req, res) {
    Skill.findAll()
    	.then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          //res.render('skills', {skills: data});          
        }
    });
});

router.post('/skill/create', function(req, res) {
    Skill.create({skillName: req.body.skillName})
    .then(function() {
        if (renderJSON) {
          res.json(data);
        } else {
          res.redirect('/skills');
        }
    });
});

router.get('/editprofile', function(req, res) {
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile');
        }
});


router.get("/profile/:id", function(req, res) {
    Geek.findOne({where: {id: req.params.id} })
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          //res.render('editprofile', {geeks: data});
          res.render('editprofile');
        }
    });
});

router.get("/users", function(req, res) {
    User.findAll()
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          //res.render('skills', {skills: data});          
        }
    });
});

router.post('/editprofile', function(req, res) {
   console.log("selections : [ " + req.body.q1 +" - " + req.body.q2 +" - "
    + req.body.q3 +" - "+ req.body.q4 +" - "+ req.body.q5 +"]");
   res.render('dashboard'); 
});

router.put('/geek/update/:id', function(req, res) {
    Geek.update({html: req.body.q1, 
                 css: req.body.q2,
                 javascript: req.body.q3,
                 mysql: req.body.q4,
                 node: req.body.q5
                },{where: {id: req.params.id}})
    .then(function(){
        res.redirect('/profile');
    });
});

router.delete('/geek/delete/:id', function (req, res) {
    Geek.delete({where: {id: req.params.id}})
    .then(function(){
        res.redirect('/geeks');
    });
});


//AUTHENTICATED USER SIGN UP, LOGIN, LOGOUT
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  req.flash('error', 'You have to be logged in to access the page.');
  res.redirect('/');
};

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/signup', signupController.show);
router.post('/signup', signupController.signup);

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true 
}));

router.get('/dashboard', isAuthenticated, function(req, res) {
  res.render('dashboard');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;