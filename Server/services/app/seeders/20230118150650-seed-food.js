"use strict";

const slugger = require('../helpers/slugger');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let dataFood = require("../data.json").Food.map((el) => {
      
      el.UserId = el.authorId
      el.CategoryId = el.categoryId
      el.slug = slugger(el.name)
      el.createdAt = el.updatedAt = new Date();

      delete el.id;
      delete el.categoryId
      delete el.authorId
      return el;
    });
    await queryInterface.bulkInsert("Food", dataFood);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Food", null, {});
  },
};