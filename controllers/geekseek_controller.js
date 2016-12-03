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

var userID;

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

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' , failureFlash: true}),
  function(req, res) {
    res.redirect('/seeker/' + req.body.username);
  });


router.get('/currentuser', function (req, res){
    User.findOne({where: {id: userID} })
      .then(function(data){
       if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {id:userID, user:data});
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


router.get('/seeker/:username', function(req, res) {
    User.findOne({where: {username: req.params.username} })
      .then(function(data){
          userID = data.id;
        res.render('seekers', { id: data.id });
    });
        
});

router.get('/newquery/:id', function(req, res) {
    res.render('newquery', {id : req.params.id});
        
});

router.get('/newquery', function(req, res) {
    res.render('newquery', {id : userID});
        
});

router.post('/newquery', function(req, res) {
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
          res.render('results', {id : req.params.id, queries: data});
        }
    });

});

router.put('/query/insert/:id', function(req, res) {
    console.log('updating query for user: ' + req.params.id);
    Query.create({queryName: req.body.queryName, 
                 html: req.body.q1,
                 css: req.body.q2, //should be q2's value
                 javascript: req.body.q3,
                 mysql: req.body.q4,
                 node: req.body.q5,
                 UserId: req.params.id
                }
              //   {where: 
              //     {UserId: req.params.id}
              // }
              )
    .then(function(){
        res.redirect('/savedqueries/'+req.params.id);
    });
});

router.get('/results/:id', function(req,res){ //query results
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
        res.render('results', {id : req.params.id, queries: data});
}
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
        res.render('results', {id : userID, queries: data});
}
    });
});

/////SAVED QUERIES//// For logged in user to view their saved queries by UserId
//This will return saved queries based on the id passed
router.get("/savedqueries/:id", function(req, res) {
    Query.findAll({where: {id: userID} }) //
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('savedqueries', {id : userID, queries: data});
        }
    });
});

router.get("/savedqueries", function(req, res) {
    Query.findAll({where: {id: userID} }) //
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('savedqueries', {id : userID, queries: data});
        }
    });
});

/////EDIT PROFILE//// For logged in user to edit their username(email), password, zipcode
router.get("/user/find/:id", function(req, res) { //This will return the information of a User based on the id passed
    User.findOne({where: {user: userID} })
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {id: userID, users: data});
        }
    });
});

router.get('/editprofile/:id', function(req, res) {
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {id:userID});
        }
});

router.get('/editprofile', function(req, res) {
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {id:userID});
        }
});

//This will update the skills in the Geek table based on the id passed
router.post('/geek/update', function(req, res) {
    var newGeek = { html: req.body.q1, 
                    css: req.body.q2,
                    javascript: req.body.q3,
                    mysql: req.body.q4,
                    node: req.body.q5,
                    UserId : userID
                   }  
    Geek.findOne({where: {UserId: userID}})
    .then(
      function(user) { 
         Geek.update( newGeek, {where: {UserId: userID}})
         .then(function(){
         });
      },
      function(err) { 
        Geek.create(newGeek)
         .then(function(){
         });
      });
});

//this will delete a Geek record based on the id passed
router.delete('/geek/delete/:id', function (req, res) {
    Geek.destroy({where: {id: req.params.id}})
    .then(function(){
        res.redirect('myskills');
    });
});

router.delete('/geek/delete', function (req, res) {
    Geek.destroy({where: {id: userID}})
    .then(function(){
        //res.redirect('myskills');
    });
});

router.get('/myskills', function (req, res) {
    Geek.findOne({where: {UserId: userID}})
    .then(function(data){
        res.render('myskills', {id: userID, skills: data});
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
