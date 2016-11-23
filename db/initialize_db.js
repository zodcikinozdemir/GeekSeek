var express = require('express');
var app = express();
var sequelize = require('Sequelize');
var models = require('../models');
var conn = models.sequelize;

// =======================================================================
// PREPARE OUR TABLES 
// =======================================================================
conn.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return conn.sync({force:true})
})

// =======================================================================
// ADD USERS 
// =======================================================================
.then(function(){
	return models.User.create(
	{
		userType: "Geek",
		username: "jane@email.com",
		zipCode: "12345",
		password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'

	})
})
.then(function(){
	return models.User.create(
	{
		userType: "Seeker",
		username: "john@email.com",
		zipCode: "12345",
		password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	})
})

// =======================================================================
// ADD SEEKER 
// =======================================================================
.then(function(){
	return models.Seeker.create(
	{
		username: "nalani@email.com",
		zipCode: "12345",
		companyName: 'RCB',
		password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	})
})
// =======================================================================
// ADD GEEKS 
// =======================================================================
.then(function(){
	return models.Geek.create(
	{
		username: "gudiaz@msn.com",
		zipCode: "07059",
		HTML: "2",
		CSS:"3",
		JAVASCRIPT:"4",
		MYSQL:"5",
		NODE:"5",

	});
})

.then(function(){
	return models.Geek.create(
	{
		username: "odcikin@msn.com",
		zipCode: "12345",
		HTML: "5",
		CSS: "4",
		JAVASCRIPT: "3",
		MYSQL: "2",
		NODE: "1",
	});
})
.then(function(){
	return models.Geek.create(
	{
		username: "rcjogee@gmail.com",
		zipCode: "12345",
		HTML: "4",
		CSS:"5",
		JAVASCRIPT:"4",
		MYSQL:"3",
		NODE:"2",
	});
})
.then(function(){
	return models.Geek.create(
	{
		username: "mikeamon21@gmail.com",
		zipCode: "12345",
		HTML: "3",
		CSS:"4",
		JAVASCRIPT:"5",
		MYSQL:"4",
		NODE:"3",
	});
})

// =======================================================================
// ADD SKILLS 
// =======================================================================
.then(function() {
	return models.Skill.create( 
	{
		skillName: "HTML"
	})
})
.then(function() {
	return models.Skill.create( 
	{
		skillName: "CSS"
	})
})
.then(function() {
	return models.Skill.create( 
	{
		skillName: "JAVASCRIPT"
	})
})
.then(function() {
	return models.Skill.create( 
	{
		skillName: "MYSQL"
	})
}).then(function() {
	return models.Skill.create( 
	{
		skillName: "NODE"
	})
})
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "jQuery"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Express"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "AJAX"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "JSON"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "XML"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "MS SQL"
// 	})
// })

// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Mongo DB"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Mongoose"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Sequelize"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "React"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Angular"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Meteor"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "Handlebars"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "SEO"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "REST"
// 	})
// })
// .then(function() {
// 	return models.Skill.create( 
// 	{
// 		skillName: "SOAPxw"
// 	})
// })


