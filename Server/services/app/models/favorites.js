'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorites.belongsTo(models.Member, {foreignKey: "MemberId"})
      Favorites.belongsTo(models.Food, {foreignKey: "FoodId"})
    }
  }
  Favorites.init({
    MemberId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FoodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};