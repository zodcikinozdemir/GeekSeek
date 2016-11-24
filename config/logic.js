var mysql = require('mysql');
var inquirer = require('inquirer');


//MYSQL SETTINGS
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'geekseek_db'
});
//CONNECT TO MYSQL
connection.connect(function(err) {
    if (err) throw err;
    console.log("Geek Seek");
    console.log("---------------------------");
    //SHOW START MENU
    // start();
displayUsers();
displayGeeks();
displaySkills();
showGeeks();
showSeekers();

});

var Geek = require ('./../config/logic.js');

function displayUsers() {
	 connection.query('SELECT * FROM Users', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].userType + " | " + res[i].username + " | " + res[i].zipCode);
        }
        console.log("------------------------------");
    });
}
function displayGeeks() {
 connection.query('SELECT * FROM Geeks', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].username + " | " + res[i].zipCode);
        }
        console.log("------------------------------");
    });
}

function displaySkills(){
	 connection.query('SELECT * FROM Skills', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].skillName);
        }
        console.log("------------------------------");
    });
}

function showGeeks(){
	connection.query('SELECT * FROM Users WHERE userType = "Geek"', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].userType + " | "+ res[i].username + " | " + res[i].zipCode);
        }
        console.log("------------------------------");
    });
}

function showSeekers(){
	connection.query('SELECT * FROM Users WHERE userType = "Seeker"', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].userType + " | "+ res[i].username + " | " + res[i].zipCode);
        }
        console.log("------------------------------");
    });
}