'use strict';
module.exports = function(sequelize, DataTypes) {
  var Geek = sequelize.define('Geek', {
    
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
      allowNull: false
    }
  }, {
    HTML: {
      type: DataTypes.STRING,
      
    }
  }, {
    CSS:{
      type: DataTypes.STRING,
    }
  }, {
    JAVASCRIPT: {
      type: DataTypes.STRING,
    }
  }, {
    MYSQL: {
      type: DataTypes.STRING,
    }
  }, {
    NODE: {
      type: DataTypes.STRING,
    }
  }, {
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Geek.belongsToMany(models.Skill, {through: 'GeekSkill'});
     }
    }
  });
  return Geek;
};