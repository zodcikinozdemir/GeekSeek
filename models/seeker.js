'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seeker = sequelize.define('Seeker', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
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
      allowNull: false,
      validate: {
        len: [5,5],
      }
    },
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