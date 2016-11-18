// var geekseek_model = require('../models/')["geekseek_model"];

var express = require('express');
var router = express.Router();

  router.get("/", function(req, res) {
      res.status(200)
         .json("Hello - Project # 2 Full Stack Node FSF");
  })


// 	router.get('/', function(req, res) {
// 		res.redirect('/????');
// 	});


module.exports = router;