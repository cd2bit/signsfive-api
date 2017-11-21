'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sign = sequelize.define('Sign', {
    giphy_id: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    }
  });

  Sign.associate = models => {
    Sign.belongsToMany(models.Category, {as: "Categories", through: "category_sign", foreignKey: "sign_id", otherKey: "gloss_id"});
    Sign.belongsToMany(models.Gloss, {as: "Glosses", through: "gloss_sign", foreignKey: "sign_id", otherKey: "gloss_id"});
    Sign.belongsToMany(models.Region, {as: "Regions", through: "region_sign", foreignKey: "sign_id", otherKey: "region_id"});
  };

  return Sign;
};
