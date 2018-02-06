'use strict'

module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
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
  })

  category.associate = models => {
    category.belongsToMany(models.source, {
      as: 'Sources',
      through: 'category_source',
      foreignKey: 'categoryId',
      otherKey: 'sourceId'
    })
    category.belongsToMany(models.sign, {
      as: 'Signs',
      through: 'category_sign',
      foreignKey: 'categoryId',
      otherKey: 'signId'
    })
  }

  return category
};
