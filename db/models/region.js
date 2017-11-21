'use strict';
module.exports = (sequelize, DataTypes) => {
  var Region = sequelize.define('Region', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Region;
};
