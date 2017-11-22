'use strict';
module.exports = (sequelize, DataTypes) => {
  var source = sequelize.define('source', {
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });

  return source;
};
