'use strict';
module.exports = (sequelize, DataTypes) => {
  var Source = sequelize.define('Source', {
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });

  Source.associate = models => {
    Source.belongsToMany(models.Gloss, {as: "Glosses", through: "gloss_source", foreignKey: "source_id", otherKey: "gloss_id"});
    Source.belongsToMany(models.Category, {as: "Categories", through: "category_source", foreignKey: "source_id", otherKey: "category_id"});
  };

  return Source;
};
