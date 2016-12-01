var express = require('express');
var router = express.Router();
var passport = require('passport');
var signupController = require('./signupController.js');
var Geek = require('../models/')["Geek"];
var Seeker = require('../models/')["Seeker"];
var Skill = require('../models/')["Skill"];
var User = require ('../models/')["User"];
var Query = require ('../models/') ["Query"];
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var renderJSON = false;

if (config.renderJSON == "1") {
  renderJSON = true;
}

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
    failureRedirect: '/login',
    failureFlash: true 
}));

router.get('/dashboard', isAuthenticated, function(req, res) {
  res.render('dashboard');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});





//This will return all of the information in the Geek table
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

//This will return the information of a Geek based on the id passed
router.get("/geek/find/:id", function(req, res) {
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

//This will update the skills in the Geek table based on the id passed
router.put('/geek/update/:id', function(req, res) {
    console.log('updating geek id: ' + req.params.id);
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

//this will delete a Geek record based on the id passed
router.delete('/geek/delete/:id', function (req, res) {
    Geek.destroy({where: {id: req.params.id}})
    .then(function(){
        res.redirect('/geeks');
    });
});


//This will return all of the information in the Seeker table
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






//This will return all of the information in the Skills table
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

//This will return all of the information in the Users table
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

//This will add a new record to the Skills table
router.post('/skill/create', function(req, res) {
    Skill.create({skillName: req.body.skillName})
    .then(function() {
        if (renderJSON) {
          console.log('skill ' + req.body.skillName + ' added.');
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

router.post('/editprofile', function(req, res) {
   console.log("selections : [ " + req.body.q1 +" - " + req.body.q2 +" - "
    + req.body.q3 +" - "+ req.body.q4 +" - "+ req.body.q5 +"]");
   res.render('dashboard'); 
});



module.exports = router;