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
	return conn.sync({force:true});
})

// =======================================================================
// ADD USERS 
// =======================================================================
.then(function(){
	return models.User.create(
	{
		// userType: "Seeker",
		id:"1",
		username: "jane@email.com",
		zipCode: "12345",
		password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'

	});
})
.then(function(){
	return models.User.create(
	{
		// userType: "Seeker",
		id:"2",
		username: "john@email.com",
		zipCode: "12345",
		password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})
.then(function(){
	return models.User.create(
	{
		id:"3",
		username: "sd@email.com",
		zipCode: "08854",
			password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})
.then(function(){
	return models.User.create(
	{
		id:"4",
		username: "mikeamon21@gmail.com",
		zipCode: "12345",
			password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})
.then(function(){
	return models.User.create(
	{
		id:"5",
		username: "rcjogee@gmail.com",
		zipCode: "12345",
		password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})
.then(function(){
	return models.User.create(
	{
	id:"6",		
	username: "odcikin@msn.com",
		zipCode: "12345",
			password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})
.then(function(){
	return models.User.create(
	{
id:"7",		
username: "gudiaz@msn.com",
		zipCode: "07059",
			password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})

// =======================================================================
// ADD QUERY 
// =======================================================================
.then(function(){
	return models.Query.create(
	{

		queryName: "Looking For a Geek",
		html: "2",
		css:"3",
		javascript:"4",
		mysql:"5",
		node:"5",
		UserId: "3",
	});
})
.then(function(){
	return models.Query.create(
	{

		queryName: "Where are You?",
		html: "3",
		css:"3",
		javascript:"3",
		mysql:"3",
		node:"3",
		UserId: "3",
	});
})
.then(function(){
	return models.Query.create(
	{

		queryName: "Project Collab",
		html: "3",
		css:"3",
		javascript:"4",
		mysql:"4",
		node:"5",
		UserId: "7",
	});
})
.then(function(){
	return models.Query.create(
	{

		queryName: "my search",
		html: "2",
		css:"3",
		javascript:"4",
		mysql:"5",
		node:"5",
		UserId: "7",
	});
})
// =======================================================================
// ADD SEEKER 
// =======================================================================
.then(function(){
	return models.Seeker.create(
	{
		// username: "nalani@email.com",
		// zipCode: "12345",
		companyName: 'RCB',
		// password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
  //     salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
	});
})
// =======================================================================
// ADD GEEKS 
// =======================================================================
.then(function(){
	return models.Geek.create(
	{
		
		html: "2",
		css:"3",
		javascript:"4",
		mysql:"5",
		node:"5",
		UserId:"3",

	});
})

.then(function(){
	return models.Geek.create(
	{
	
		html: "5",
		css: "4",
		javascript: "3",
		mysql: "2",
		node: "1",
		UserId:"4"

	});
})
.then(function(){
	return models.Geek.create(
	{
		
		html: "4",
		css:"5",
		javascript:"4",
		mysql:"3",
		node:"2",
		UserId:"5"

	});
})
.then(function(){
	return models.Geek.create(
	{
		
		html: "3",
		css:"4",
		javascript:"5",
		mysql:"4",
		node:"3",
		UserId:"6"

	});
})
.then(function(){
	return models.Geek.create(
	{
		
		html: "3",
		css:"3",
		javascript:"5",
		mysql:"4",
		node:"4",
		UserId:"7"

	});
})

// =======================================================================
// ADD SKILLS 
// =======================================================================
.then(function() {
	return models.Skill.create( 
	{
		skillName: "html"
	});
})
.then(function() {
	return models.Skill.create( 
	{
		skillName: "css"
	});
})
.then(function() {
	return models.Skill.create( 
	{
		skillName: "javascript"
	});
})
.then(function() {
	return models.Skill.create( 
	{
		skillName: "mysql"
	});
}).then(function() {
	return models.Skill.create( 
	{
		skillName: "node"
	});
});


