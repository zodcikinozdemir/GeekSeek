'use strict';
module.exports = function(sequelize, DataTypes) {
  var Geek = sequelize.define('Geek', {
    
    name: { 
      allowNull: false,
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
  return Geek;
};