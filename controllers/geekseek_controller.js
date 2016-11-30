var passport = require('passport'),
    signupController = require('./signupController.js');

var express = require('express');
var router = express.Router();
var Geek = require('../models/')["Geek"];
var Seeker = require('../models/')["Seeker"];
var Skill = require('../models/')["Skill"];
var User = require ('../models/')["User"];


  router.get("/geeks", function(req, res) {
      Geek.findAll()
      	.then(function(data){
          res.render('geeks', {geeks: data});
      		//res.json(data);
      });
  });

  router.get("/seekers", function(req, res) {
      Seeker.findAll()
      	.then(function(data){
      		res.render('seekers', {seekers: data});
          //res.json(data);
      });
  });

  router.get("/skills", function(req, res) {
      Skill.findAll()
      	.then(function(data){
      		res.json(data);
      });
  });

   router.get("/users", function(req, res) {
      User.findAll()
        .then(function(data){
          res.json(data);
      });
  });


//AUTHENTICATED USER SIGN UP, LOGIN, LOGOUT
  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    req.flash('error', 'You have to be logged in to access the page.');
    res.redirect('/');
  };
  
  router.get('/signup', signupController.show);
  router.post('/signup', signupController.signup);

  router.post('/login', passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true 
  }));

  router.get('/login', function(req, res) {
    res.render('login');
  });

  router.get('/', function(req, res) {
    res.render('home');
  });

  router.get('/dashboard', isAuthenticated, function(req, res) {
    res.render('dashboard');
  });

  router.get('/editprofile', function(req, res) {
    res.render('editprofile');
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

module.exports = router;