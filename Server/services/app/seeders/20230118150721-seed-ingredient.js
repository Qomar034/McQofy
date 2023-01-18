"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let dataIngredient = require("../data.json").Ingredients.map((el) => {

      el.FoodId = el.itemId
      el.createdAt = el.updatedAt = new Date();

      delete el.id
      delete el.itemId
      return el;
    });
    await queryInterface.bulkInsert("Ingredients", dataIngredient);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};