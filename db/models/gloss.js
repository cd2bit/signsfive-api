'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gloss = sequelize.define('Gloss', {
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

  Gloss.associate = models => {
    Gloss.belongsToMany(models.Source, {as: "Sources", through: "gloss_source", foreignKey: "gloss_id", otherKey: "source_id"});
    Gloss.belongsToMany(Gloss, {as: "AlternativeGlosses", through: "gloss_gloss", foreignKey: "gloss_id", otherKey: "alt_gloss_id"});
  };

  return Gloss;
};
