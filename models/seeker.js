'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seeker = sequelize.define('Seeker', {
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
  companyName: {
    type: DataTypes.STRING,
  },

  // password: {
  //   type: DataTypes.STRING,
  // },
  // salt: {
  //   type: DataTypes.STRING
  // },
  }, {
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
         Seeker.belongsToMany(models.Skill, {through: 'SeekerSkill'});
     }
    }
  });
  return Seeker;
};