'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.Category, {foreignKey: "CategoryId"})
      Food.belongsTo(models.User, {foreignKey: "UserId"})
      Food.hasMany(models.Favorites, {foreignKey: "FoodId"})
      Food.hasMany(models.Ingredient, {foreignKey: "UserId"})
    }
  }
  Food.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Food Name cannot be empty!"},
        notNull : {msg: "Food Name must be filled!"},
      },
      unique: {msg: "Food with this name already exist."}
    },
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Food Image URL cannot be empty!"},
        notNull : {msg: "Food Image URL must be filled!"},
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};