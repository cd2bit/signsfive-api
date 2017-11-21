'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
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
  }, {
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.Sign, {as: "Signs"});
      }
    }
  });
  return Author;
};
