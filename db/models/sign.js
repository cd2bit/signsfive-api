'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sign = sequelize.define('Sign', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // - terminologies
        // - categories
        // - introspects
      }
    }
  });
  return Sign;
};
