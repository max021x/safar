'use strict';

const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Read the JSON file
    const filePath = path.join(__dirname, 'tourdata.json');
    const tours = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Insert the data
    await queryInterface.bulkInsert('tours', tours, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tours', null, {});
  }
};
