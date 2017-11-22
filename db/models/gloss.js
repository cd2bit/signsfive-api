'use strict';
module.exports = (sequelize, DataTypes) => {
  var gloss = sequelize.define('gloss', {
    name: {
      type: DataTypes.STRING,
      validate: {
        is: /^[a-z]+( [a-z]+)*$/i,
        notNull: true,
        len: [3, 50]
      }
    },
    description: {
      type: DataTypes.TEXT,
      notNull: true
    }
  });

  return gloss;
};
