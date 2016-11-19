'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seeker = sequelize.define('Seeker', {
    
    name: { 
      allowNull: false,
      type: DataTypes.STRING
    },
    company: { 
      type: DataTypes.STRING
    },
    email: { 
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: { 
      type: DataTypes.STRING
    },
    zip: { 
      allowNull: false,
      type: DataTypes.STRING
    },
  });
  return Seeker;
};