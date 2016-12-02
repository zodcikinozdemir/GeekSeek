'use strict';
module.exports = function(sequelize, DataTypes) {
  var Query = sequelize.define('Query', {
    
    queryName: { 
      allowNull: false,
      type: DataTypes.STRING
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
    node: {
      type: DataTypes.INTEGER,
            allowNull: true

    }
  
  }, {
    timestamps: false,
    paranoid: true,

    classMethods: {
      associate: function(models) {
        // associations can be defined here
         Query.belongsTo(models.User, {foreignKey: 'UserId'});

         // Query.belongsToMany(models.Seeker, {through: 'Seekers'});     
       }
    }
  });
  return Query;
};