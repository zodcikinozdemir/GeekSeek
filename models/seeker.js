'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seeker = sequelize.define('Seeker', {
 
  companyName: {
    type: DataTypes.STRING,
  },

  }, {
    timestamps: true,
    createdAt: false,  // I don't want createdAt
    paranoid: true,

    classMethods: {
      associate: function(models) {
        // associations can be defined here
         // Seeker.belongsToMany(models.Skill, {through: 'SeekerSkill'});
          Seeker.belongsTo(models.User);

     }
    }
  });
  return Seeker;
};