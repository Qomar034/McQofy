'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promos.belongsTo(models.User, {foreignKey: "UserId"})
    }
  }
  Promos.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Promo name cannot be empty!"},
        notNull : {msg: "Promo name must be filled!"},
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Promo Image cannot be empty!"},
        notNull : {msg: "Promo Image must be filled!"},
      },
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Promo Caption cannot be empty!"},
        notNull : {msg: "Promo Caption must be filled!"},
      },
    },
    description: DataTypes.TEXT,
    expired: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Promo Expired Date cannot be empty!"},
        notNull : {msg: "Promo Expired Date must be filled!"},
      },
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Promos',
  });
  return Promos;
};