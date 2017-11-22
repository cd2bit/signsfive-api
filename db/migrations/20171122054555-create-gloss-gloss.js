'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gloss_gloss', {
      glossId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'glosses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      alt_glossId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'glosses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      return queryInterface.addIndex('gloss_gloss', {
        unique: true,
        fields: ['glossId', 'alt_glossId']
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gloss_gloss');
  }
};
