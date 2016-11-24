
var User = require ('../../app/model/user.js');
var Skill = require('../../app/model/skill.js');

module.exports = function(callback) {
Model.User.sync({ force: true }).then(function() {
    // create username with username: user and 
    // password: user
    Model.User.create({
      username: 'User@email.com',
      password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
    }).then(callback);
  });

  // recreate User table
//   Model.Geek.sync({ force: true }).then(function() {
//     // create username with username: user and 
//     // password: user
//     Model.Geek.create({
//       username: 'geekUser@email.com',
//       password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
//       salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
//     }).then(callback);
//   });
// Model.Seeker.sync({ force: true }).then(function() {
//     // create username with username: user and 
//     // password: user
//     Model.Seeker.create({
//       username: 'seekerUser@email.com',
//       password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
//       salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
//     }).then(callback);
//   });

Model.Skill.sync({ force: true }).then(function() {
    // create username with username: user and 
    // password: user
    Model.Skill.create({
      skill: 'HTML',
      difficulty: '5',
      active: true
    }).then(callback);
  });

};