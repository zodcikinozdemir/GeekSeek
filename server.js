var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var setupPassport = require('./setupPassport'),
    flash = require('connect-flash'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');
var routes = require('./controllers/geekseek_controller.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var initdb = require("./db/initialize_db.js");

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))

app.use('/styles', express.static(__dirname + '/styles'))

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));




app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

var hbs = exphbs.create({
    defaultLayout: 'app',
    helpers: {
      section: function(name, options) {
        if (!this._sections) this._sections = {}
        this._sections[name] = options.fn(this)
        return null
      }
    }
  })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


setupPassport(app);

app.use('/', routes);
app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});
