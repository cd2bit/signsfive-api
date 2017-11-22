'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('signs', 'authorId', {
      type: Sequelize.INTEGER,
      references: {model: 'authors', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('signs', 'authorId');
  }
};
