'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gloss = sequelize.define('Gloss', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Gloss;
};
