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

  source.associate = models => {
    source.belongsToMany(models.gloss, {as: "Glosses", through: "gloss_source", foreignKey: "sourceId", otherKey: "glossId"});
  };

  return source;
};
