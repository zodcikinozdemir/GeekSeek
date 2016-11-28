'use strict';
module.exports = function(sequelize, DataTypes) {
  var Query = sequelize.define('Query', {
    queryName: { 
      allowNull: false,
      type: DataTypes.STRING
    },
    html: {
      type: DataTypes.STRING,
      allowNull: true

  }, 
    css:{
      type: DataTypes.STRING,
            allowNull: true

  }, 
    javascript: {
      type: DataTypes.STRING,
          allowNull: true

  }, 
   mysql: {
      type: DataTypes.STRING,
            allowNull: true

    },
    node: {
      type: DataTypes.STRING,
            allowNull: true

    }
  
  }, {
    timestamps: false,
    // createdAt: false,  // I don't want createdAt
    paranoid: true,

    classMethods: {
      associate: function(models) {
        // associations can be defined here
         // Query.belongsTo(models.User);

         // Query.belongsToMany(models.Seeker, {through: 'Seekers'});     
       }
    }
  });
  return Query;
};