'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      slug: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Active'
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Food');
  }
};