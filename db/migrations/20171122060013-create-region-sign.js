'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('region_sign', {
      regionId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'regions', key: 'id'},
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
    }).then(() => {
      return queryInterface.addIndex('region_sign', {
        unique: true,
        fields: ['regionId', 'signId']
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('region_sign');
  }
};
