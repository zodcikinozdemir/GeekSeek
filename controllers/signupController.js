
var bcrypt = require('bcrypt'),
  User = require('../models/')["User"];

module.exports.show = function(req, res) {
  res.render('signup')
}

module.exports.signup = function(req, res) {
  var id = req.body.id;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  var zipCode = req.body.zipCode;
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }
  
  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  var newUser = {
    id: id,
    username: username,
    salt: salt,
    password: hashedPassword,
    zipCode: zipCode
  }
  
  User.create(newUser).then(function() {
      // if(userType=='seeker') {
       res.redirect('/newquery')
      // } else {
      //   res.redirect('/geeks');
      // }
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
}