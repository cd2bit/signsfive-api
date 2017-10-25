'use strict';
module.exports = (sequelize, DataTypes) => {
  var Introspect = sequelize.define('Introspect', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Introspect;
};