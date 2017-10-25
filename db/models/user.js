'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
