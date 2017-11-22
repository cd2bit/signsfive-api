'use strict';
module.exports = (sequelize, DataTypes) => {
  var sign = sequelize.define('sign', {
    giphy_id: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        isAlphanumeric: true
      }
    }
  });

  return sign;
};
