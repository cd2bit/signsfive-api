'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notNull: true
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notNull: true,
        len: [3, 15]
      }
    },
    auth0_id: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    }
  });

  return author;
};
