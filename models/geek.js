'use strict';
module.exports = function(sequelize, DataTypes) {
  var Geek = sequelize.define('Geek', {
    
  //  username: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //    isEmail: true,
  //   }
  // },
  //   zipCode: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
    
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
    node:{
      type: DataTypes.STRING,
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
        Geek.belongsTo(models.User);
        // Geek.hasOne(models.User);
     }
    }
  });
  return Geek;
};