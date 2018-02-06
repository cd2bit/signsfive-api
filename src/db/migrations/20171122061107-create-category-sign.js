'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category_sign', {
      categoryId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      signId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'signs', key: 'id'},
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
    return queryInterface.dropTable('category_sign');
  }
};
