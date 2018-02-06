'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gloss_source', {
      glossId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'glosses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sourceId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'sources', key: 'id'},
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gloss_source');
  }
};
