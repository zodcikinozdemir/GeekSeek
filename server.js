var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var initdb = require("db/initialize.js");

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./controllers/geekseek_controller.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);
app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});
