'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('authors', 'regionId', {
      type: Sequelize.INTEGER,
      references: {model: 'regions', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('authors', 'regionId');
  }
};
