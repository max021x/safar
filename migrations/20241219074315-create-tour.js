'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.INTEGER
      },
      places: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      information: {
        type: Sequelize.STRING
      },
      tourCode: {
        type: Sequelize.STRING
      },
      hotel: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tours');
  }
};