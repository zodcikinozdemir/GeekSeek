'use strict';
module.exports = function(sequelize, DataTypes) {
  var Geek = sequelize.define('Geek', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
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