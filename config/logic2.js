var mysql = require('mysql');
var inquirer = require('inquirer');
var globalUserId;

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
    console.log("Welcome to GeekSeek!");
    console.log("---------------------------");
    //SHOW START MENU
    displayUsers(); //to see a User Id to choose

});

/USERS
Display list of Users
function displayUsers(){
	//display all of the users
	   connection.query('SELECT * FROM Users', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].username + " | " + res[i].userType);
        }
        console.log("------------------------------");
        	chooseUser();//to choose a user id

    });
} /USERS
 
function chooseUser() {

    inquirer.prompt({
        name: "choice",
        type: "input",
        message: "Enter an ID: "
    }).then(function(answer) {
            globalUserId = answer.choice;
            connection.query('SELECT * FROM Users WHERE id=?', [globalUserId], function(err, res) {

                for (var i = 0; i < res.length; i++) {
                	// console.log(res);
                	var userId = res[i].userId;
                    var userType = res[i].userType;
                   
                    if (userType == "Geek") {
                    	console.log("you're a geek");
                    	console.log("ABOUT: " + res[i].id + " | " + res[i].username + " | " + res[i].userType + " | " + res[i].zipCode);
                    	menu();


                	} else if (userType == "Seeker"){
                		console.log("you're a seeker");
                		console.log("ABOUT: " + res[i].id + " | " + res[i].username + " | " + res[i].userType + " | " + res[i].zipCode);
                		menu();
                	}

                }
            });
        }
    );
}



function displayGeeks(){
	connection.query('SELECT Users.id, Users.username, Users.userType, Geeks.html, Geeks.css, Geeks.javascript, Geeks.mysql, Geeks.node FROM Geeks INNER JOIN Users ON Geeks.UserID=Users.id', function(err, res) {
for (var i = 0; i < res.length; i++) {

            console.log(res[i].id + " | " + res[i].username + " | " + res[i].userType + " | " + res[i].html + " | " + res[i].css + " | " + res[i].javascript+ " | " + res[i].mysql+ " | " + res[i].node);
        }
        console.log("------------------------------");
});
	start();
}



         
 function menu(){
 	inquirer.prompt({
        name: "selectQuery",
        type: "rawlist",
        message: "Select an action:",
        choices: ["Run Query", "Saved Queries", "Show Profile"]
    }).then(function(answer) {
        switch (answer.selectQuery) {
            case "Run Query":
            	runQuery();
            	break;
           	case "Saved Queries":
            	showQueries();
            	break;
            case "Show Profile":
            	showProfile();
            	break;
            
        }

    });	
 }  

 function showProfile(){
 	console.log("Here are your current credentials on file: ");


            connection.query('SELECT * FROM Users WHERE id=?', [globalUserId], function(err, res) {

                for (var i = 0; i < res.length; i++) {
                	// console.log(res);
                    var userType = res[i].userType;
                    console.log("ID| " + res[i].id + " | " + res[i].username + " | " + res[i].userType + " | " + res[i].zipCode);

                   
                    if (userType == "Geek") {
                    	console.log("you're a geek");

                    	connection.query('SELECT * from Geeks WHERE UserId =?',[globalUserId], function(err, res) {
						
						for (var i = 0; i < res.length; i++) {

            			console.log("SKILLS| html- " + res[i].html + " | css-" + res[i].css + " | javascript- " + res[i].javascript + " | mysql -  " + res[i].mysql + " | node - " + res[i].node);
        					}
        				console.log("------------------------------");
							});
					 } else if (userType == "Seeker"){
                		console.log("you're a seeker");
                		connection.query('SELECT * FROM Seekers WHERE UserId =?',[globalUserId], function(err, res) {
						for (var i = 0; i < res.length; i++) {

            		console.log("COMPANY NAME: " + res[i].companyName);
        			}
        			console.log("------------------------------");
					});
				}

                	}

                }
            );
 }
 

function runQuery(){
	console.log("Enter the proficiency from 1 to 5, 1 being no experience and 5 being an expert.");
inquirer.prompt([{

        name: "html",
        type: "input",
        message: 'HTML'
    }, {
        name: "css",
        type: "input",
        message: 'CSS'
    }, {
        name: "javascript",
        type: "input",
        message: 'Javascript'
    }, {
        name: "mysql",
        type: "input",
        message: "MYSQL"
    }, {
        name: "node",
        type: "input",
        message: "NODE"
    },{
    	name: 'queryName',
		type: "input",
		message: "Give this query a name: " 
	}
    	]).then(function(answer) {
    		var html= answer.html,
            css= answer.css,
            js= answer.javascript,
            sql= answer.mysql,
            node= answer.node,
            queryName=answer.queryName;


	        //run the query against the geeks
			connection.query('SELECT * FROM Geeks WHERE html >= ? AND css >= ? AND javascript >= ? AND mysql >= ? AND node >= ?', [html, css, js, sql, node], function(err, res) {
				//if there's an error, display the error
	        	if(err){
	        	console.log(err);

	        	} else if(res){ //if there's no error, show us the geeks that match the query and save the query
	        	console.log("GEEK RESULTS");
	    		console.log("------------------------------");

					for (var i = 0; i < res.length; i++) { //print each geek
					console.log(res[i].UserId  + " | html- " + res[i].html + " | css-" + res[i].css + " | javascript- " + res[i].javascript + " | mysql -  " + res[i].mysql + " | node - " + res[i].node);
		    		}

		       		console.log("------------------------------");
		       		
	           //save query to Queries  
	              
	        	 connection.query("INSERT INTO Queries SET ?", {
		           	queryName: answer.queryName,
		            html: answer.html,
		            css: answer.css,
		            javascript: answer.javascript,
		            mysql: answer.mysql,
		            node: answer.node,
		            UserId: globalUserId

	        		}, 
	        		function(err, res) {
			        	if (err) {
			            console.log(err);
						} else {
			                console.log("Your query was saved as: " + answer.queryName);
			                showQueries();
			             }
	           		 });
	        	
		
		       	} //end else if
		       	});
		       	});
		}


function showQueries(){
	var id = globalUserId;

	connection.query('SELECT * FROM Queries where UserId = ?', [id], function(err, res){
	for (var i = 0; i < res.length; i++) {
	console.log("Query Name: " + res[i].queryName + " | html- " + res[i].html + " | css-" + res[i].css + " | javascript- " + res[i].javascript + " | mysql -  " + res[i].mysql + " | node - " + res[i].node);
        }
        console.log("------------------------------");    		


	});
}



    //Add-update skills UPDATE * from Geeks WHERE userid = ?

function addSkills(){
	console.log("add your skills");
 	console.log("Enter the proficiency from 1 to 5, 1 being no experience and 5 being an expert.");
	inquirer.prompt([{

        name: "html",
        type: "input",
        message: 'HTML'
    }, {
        name: "css",
        type: "input",
        message: 'CSS'
    }, {
        name: "javascript",
        type: "input",
        message: 'Javascript'
    }, {
        name: "mysql",
        type: "input",
        message: "MYSQL"
    }, {
        name: "node",
        type: "input",
        message: "NODE"
    }
    	]).then(function(answer) {
    	var html= answer.html,
            css= answer.css,
            js= answer.javascript,
            sql= answer.mysql,
            node= answer.node,
            id = globalUserId;

        //add the skills to the Geek
		connection.query('INSERT INTO Geeks SET ?)', [html, css, js, sql, node, id], function(err, res) {
			//if there's an error, display the error
        	if(err){
        	console.log(err);

        	} else if(res){ //if there's no error, show us the geeks that match the query and save the query
        	console.log("GEEK RESULTS");
    		console.log("------------------------------");

			for (var i = 0; i < res.length; i++) { //print each geek
			console.log(res[i].UserId  + " | html- " + res[i].html + " | css-" + res[i].css + " | javascript- " + res[i].javascript + " | mysql -  " + res[i].mysql + " | node - " + res[i].node);
    		}

       		console.log("------------------------------");
}
});
}
);
}        
		

	