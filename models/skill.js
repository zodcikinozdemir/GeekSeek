'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    
    name: { 
      allowNull: false,
      type: DataTypes.STRING
    },
    difficulty: { 
      defaultValue: 0,
      type: DataTypes.INTEGER
    },  
    active: { 
      defaultValue: true,
      type: DataTypes.BOOLEAN
    }
  });
  return Skill;
};