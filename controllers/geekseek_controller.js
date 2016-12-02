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

/////LOGIN////
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  req.flash('error', 'You have to be logged in to access the page.');
  res.redirect('/');
};

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/login', function(req, res) {
  res.render('login');
});
router.post('/login', passport.authenticate('local', {
    successRedirect: '/newquery',
    failureRedirect: '/login',
    failureFlash: true  
}));
router.get('/currentuser', function (req, res){
    User.findOne({where: {id: req.params.id} })
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render({user: data});
        }
    });
});




/////SIGNUP////
router.get('/signup', signupController.show);
router.post('/signup', signupController.signup);

////LOGOUT///
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

////////MAIN USER DASHBOARD/////////

router.get('/dashboard', isAuthenticated, function(req, res) {
  res.render('dashboard');
});

router.post('/dashboard', function(req, res) {
  
   res.render('dashboard'); 
});

/////NEW QUERY//// For logged in user to create, submit, save their query, review results
//This will insert the query in the Query table based on the id passed
router.get('/newquery', function(req, res) {
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('newquery');
        }
});

router.post('/newquery', function(req, res) {
   console.log("selections : [ " + req.body.queryName + "-" + req.body.q1 +" - " + req.body.q2 +" - "
    + req.body.q3 +" - "+ req.body.q4 +" - "+ req.body.q5 +"]");
   res.render('newquery'); 
});

router.put('/query/insert/:id', function(req, res) {
    console.log('updating query for user: ' + req.params.id);
    Query.update({queryName: req.body.queryName, 
                 html: req.body.q1,
                 css: req.body.q2, //should be q2's value
                 javascript: req.body.q3,
                 mysql: req.body.q4,
                 node: req.body.q5
                },{where: {UserId: req.params.id}})
    .then(function(){
        res.redirect('/savedqueries');
    });
});

router.get('/results', function(req,res){ //query results
  Geek.findAll({
    where: {
      html: {
        gte: req.body.q1
      },
      css: {
        gte: req.body.q2,
      },
      javascript: {
        gte: req.body.q3
      },
      mysql: {
        gte: req.body.q4
      },
      node: {
        gte: req.body.q5
      },
    }
  }).then(function(data){
     if (renderJSON) {
          res.json(data);
        } else {
        res.render('results', {geeks: data});
}
    });
});

/////SAVED QUERIES//// For logged in user to view their saved queries by UserId
//This will return saved queries based on the id passed
router.get("/savedqueries", function(req, res) {
    Query.findOne({where: {id:"3" } }) //req.params.id
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          //res.render('editprofile', {geeks: data});
          res.render('savedqueries', {queries: data});
        }
    });
});

/////EDIT PROFILE//// For logged in user to edit their username(email), password, zipcode
router.get("/user/find/:id", function(req, res) { //This will return the information of a User based on the id passed

    User.findOne({where: {id: req.params.id} })
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {users: data});
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
   res.render('editprofile'); 
});



/////////////MY SKILLS////////////////////////



router.get("/myskills", function(req, res) { //This should get their current skills according to logged in UserId
    Geek.findOne({where: {UserId:"3" } })//req.params.id
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('myskills', {geeks: data});
        }
    });
});

router.get('/editskills', function(req, res) {
        if (renderJSON) {
          // res.json(data);
          res.render('/editskills');
        } else {
          res.render('myskills');
        }
});
router.post('/editskills', function(req, res) {
   console.log("selections : [ " + req.body.q1 +" - " + req.body.q2 +" - "
    + req.body.q3 +" - "+ req.body.q4 +" - "+ req.body.q5 +"]");
   res.render('myskills'); 
});

//This will update the skills in the Geek table based on the id passed
router.put('/geek/update/:id', function(req, res) {
    console.log('updating users geek skills: ' + req.params.id);
    Geek.update({html: req.body.q1, 
                 css: req.body.q2,
                 javascript: req.body.q3,
                 mysql: req.body.q4,
                 node: req.body.q5
                },{where: {UserId: req.params.id}})
    .then(function(){
        res.redirect('myskills');
    });
});

//this will delete a Geek record based on the id passed
router.delete('/geek/delete/:id', function (req, res) {
    Geek.destroy({where: {id: req.params.id}})
    .then(function(){
        res.redirect('myskills');
    });
});

/////OTHER///////
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

module.exports = router;

