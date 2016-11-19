// var geekseek_model = require('../models/')["geekseek_model"];

var express = require('express');
var router = express.Router();
var Geek = require('../models/')["Geek"];
var Seeker = require('../models/')["Seeker"];
var Skill = require('../models/')["Skill"];

  router.get("/", function(req, res) {
      res.status(200)
         .json("Hello - Project # 2 Full Stack Node FSF");
  })

  router.get("/geeks", function(req, res) {
      Geek.findAll()
      	.then(function(data){
      		res.json(data);
      })
  })

  router.get("/seekers", function(req, res) {
      Seeker.findAll()
      	.then(function(data){
      		res.json(data);
      })
  })

  router.get("/skills", function(req, res) {
      Skill.findAll()
      	.then(function(data){
      		res.json(data);
      })
  })

// 	router.get('/', function(req, res) {
// 		res.redirect('/????');
// 	});


module.exports = router;