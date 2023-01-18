"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let dataPromo = require("../data.json").Promos.map((el) => {
      
      el.UserId = 1
      el.createdAt = el.updatedAt = new Date();

      delete el.id;
      return el;
    });
    await queryInterface.bulkInsert("Promos", dataPromo);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Promos", null, {});
  },
};