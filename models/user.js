'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userType: {
      type: DataTypes.STRING,
      allowNull: true,
    
  },
    username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
     isEmail: true,
    }
  },
 
  zipCode: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  salt: {
    type: DataTypes.STRING
  },
  }, {
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // User.belongsToMany(models.Geek, {through: 'Geeks'});
        // User.belongsToMany(models.Seeker, {through:'Seekers'});
       }
    }
  });
  return User;
};