'use strict';
module.exports = (sequelize, DataTypes) => {
  var Source = sequelize.define('Source', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Source;
};
