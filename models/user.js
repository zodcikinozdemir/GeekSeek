'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    
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
  
},
{
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Query, {foreignKey: 'UserId'});
        User.hasOne(models.Geek, {foreignKey: 'UserId'});
        // User.hasOne(models.Seeker);
        // User.belongsToMany(models.Query, {as: 'User_id', through: 'Queries'});
       }
    }
  });
  return User;
};