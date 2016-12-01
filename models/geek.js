'use strict';
module.exports = function(sequelize, DataTypes) {
  var Geek = sequelize.define('Geek', {
    geekid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    
  },
    html: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
    css:{
      type: DataTypes.INTEGER,
            allowNull: true

    },
 
    javascript: {
      type: DataTypes.INTEGER,
            allowNull: true

    },

   mysql: {
      type: DataTypes.INTEGER,
            allowNull: true

    },
    node:{
      type: DataTypes.INTEGER,
            allowNull: true
  
  },
  },
    {
    timestamps: true,
    createdAt: false,  // I don't want createdAt
    paranoid: true,
    


    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Geek.belongsTo(models.User, {foreignKey: 'UserId'});
        // Geek.hasOne(models.User);
     }
    }
  });
  return Geek;
};