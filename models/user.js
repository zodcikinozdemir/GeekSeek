'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userType: {
      type: DataTypes.ENUM('seeker', 'geek'),
    
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

    allowNull: true,

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
        User.hasMany(models.Query);
        User.hasOne(models.Geek);
        User.hasOne(models.Seeker);
        // User.belongsToMany(models.Query, {as: 'User_id', through: 'Queries'});
       }
    }
  });
  return User;
};