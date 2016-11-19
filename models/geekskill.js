'use strict';
module.exports = function(sequelize, DataTypes) {
  var GeekSkill = sequelize.define('GeekSkill', {
    geekId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skillId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return GeekSkill;
};