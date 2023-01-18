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
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    caption: DataTypes.TEXT,
    description: DataTypes.TEXT,
    expired: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Promos',
  });
  return Promos;
};