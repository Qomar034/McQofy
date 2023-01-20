'use strict';
const {
  Model
} = require('sequelize');
const item = require('../../../../../../../Hack/Phase3/Week1/Day1/p3-challenge-1/server/models/item');
const slugger = require('../helpers/slugger');
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
      allowNull: false,
      validate: {
        notEmpty: {msg: "Food Price cannot be empty!"},
        notNull : {msg: "Food Price must be filled!"},
        min : {msg: "Food Price must be over Rp. 1.000,-", args: 1000}
      },
    },
    status: {
      type: DataTypes.INTEGER
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Food Category cannot be empty!"},
        notNull : {msg: "Food Category must be filled!"},
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Food',
  });

  Food.beforeCreate((instance, option) => {
    instance.slug = slugger(instance.name)
    return instance.slug
  })

  Food.afterUpdate((instance, option) => {
    instance.slug = slugger(instance.name)
    return instance.slug
  })
  return Food;
};