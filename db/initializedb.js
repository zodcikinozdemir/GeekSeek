var app = express();
var sequelize = require('Sequelize');
var models = require('./models');

models.sequelize.sync({force:true});

var conn = models.sequelize;

conn.query('SET FOREIGN_KEY_CHECKS = 0')

	.then(function(){
		return conn.sync({force:true})
	})
	.then(function() {
		return models.Geek.create( 
		{
			name: "Gracie",
			email: "gudiaz@msn.com"
			phone: "888-1MA-GEEK"
			zip: "07059"
		}
	)
	})
	.then(function() {
		return models.Geek.create( 
		{
			name: "Sandra",
			email: "sandramduarte83@gmail.com"
			phone: "888-2MA-GEEK"
			zip: "08825"
		}
	})
	.then(function() {
		return models.Geek.create( 
		{
			name: "Zeynep",
			email: "odcikin@msn.com"
			phone: "888-3MA-GEEK"
			zip: "07908"
		}
	})
	.then(function() {
		return models.Geek.create( 
		{
			name: "Mike",
			email: "mikeamon21@gmail.com"
			phone: "888-4MA-GEEK"
			zip: "07206"
		}
	})
	.then(function() {
		return models.Geek.create( 
		{
			name: "Ravi",
			email: "rcjogee@gmail.com"
			phone: "888-5MA-GEEK"
			zip: "07302"
		}
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "HTML" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "CSS" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Node" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Javascript" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "jQuery" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Express" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "AJAX" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "JSON" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "XML" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "MS SQL" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "MySQL" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Mongoose" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Sequelize" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "React" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Angular" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Meteor" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "Handlebars" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "SEO" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "REST" }
	})
	.then(function() {
		return models.Skill.create( 
		{ name: "SOAP" }
	})

})

