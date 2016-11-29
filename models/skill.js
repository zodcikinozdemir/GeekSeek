'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    skillName: { 
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
  }, {
    classMethods: {
      // associate: function(models) {
      //   // associations can be defined here
      //    Skill.belongsToMany(models.Geek, {through: 'GeekSkill'});
      //    Skill.belongsToMany(models.Seeker, {through: 'SeekerSkill'});     }
    }
  });
  return Skill;
};