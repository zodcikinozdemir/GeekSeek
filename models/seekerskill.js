'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeekerSkill = sequelize.define('SeekerSkill', {
    
    seekerId: { 
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
    weight: { 
      type: DataTypes.INTEGER
    },
  });
  return Seeker;
};