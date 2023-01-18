"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let dataMember = require("../data.json").Members.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      
      delete el.id;
      return el;
    });
    await queryInterface.bulkInsert("Members", dataMember);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Members", null, {});
  },
};