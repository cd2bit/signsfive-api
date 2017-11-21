'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
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

  Category.associate = models => {
    Category.belongsToMany(models.Source, {as: "Sources", through: "category_source", foreignKey: "category_id", otherKey: "source_id"});
    Category.belongsToMany(models.Sign, {as: "Signs", through: "category_sign", foreignKey: "category_id", otherKey: "sign_id"});
  };

  return Category;
};
