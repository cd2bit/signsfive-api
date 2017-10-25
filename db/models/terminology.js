'use strict';
module.exports = (sequelize, DataTypes) => {
  var Terminology = sequelize.define('Terminology', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Terminology;
};