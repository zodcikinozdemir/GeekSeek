'use strict';
module.exports = function(sequelize, DataTypes) {
  var GeekSkill = sequelize.define('GeekSkill', {
    
    geekId: { 
      allowNull: false,
      type: DataTypes.INTEGER
    },
    skillId: { 
      type: DataTypes.INTEGER
    },
    rating: { 
      allowNull: false,
      type: DataTypes.INTEGER
    },
  return GeekSkill;
};