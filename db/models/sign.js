'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sign = sequelize.define('Sign', {
    giphy_id: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Sign.belongsToMany(models.Category, {as: "Categories", through: "sign_category", foreignKey: "sign_id", otherKey: "gloss_id"});
        Sign.belongsToMany(models.Gloss, {as: "Glosses", through: "sign_gloss", foreignKey: "sign_id", otherKey: "gloss_id"});
        Sign.belongsToMany(models.Region, {as: "Regions", through: "sign_region", foreignKey: "sign_id", otherKey: "region_id"});
      }
    }
  });
  return Sign;
};
