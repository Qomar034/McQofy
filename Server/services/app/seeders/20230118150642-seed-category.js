"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let dataCategory = require("../data.json").Categories.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      
      delete el.id;
      return el;
    });
    await queryInterface.bulkInsert("Categories", dataCategory);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};