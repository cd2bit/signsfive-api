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

  sign.associate = models => {
    sign.belongsToMany(models.region, {as: "Regions", through: "region_sign", foreignKey: "signId", otherKey: "regionId"});
    sign.belongsToMany(models.category, {as: "Categories", through: "category_sign", foreignKey: "signId", otherKey: "categoryId"});
    sign.belongsToMany(models.gloss, {as: "Glosses", through: "gloss_sign", foreignKey: "signId", otherKey: "glossId"});
  };

  return sign;
};
