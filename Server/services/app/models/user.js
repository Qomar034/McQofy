'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Food, {foreignKey: "UserId"})
      User.hasMany(models.Promos, {foreignKey: "UserId"})
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "User full name cannot be empty!"},
        notNull : {msg: "User full name must be filled!"},
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "User username cannot be empty!"},
        notNull : {msg: "User username must be filled!"},
      },
      unique: {msg: "User with this username already exist."}
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "User email cannot be empty!"},
        notNull : {msg: "User email must be filled!"},
      },
      unique: {msg: "User with this email already exist."}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "User password cannot be empty!"},
        notNull : {msg: "User password must be filled!"},
      },
    },
    role: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "User phone number cannot be empty!"},
        notNull : {msg: "User phone number must be filled!"},
      },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {msg: "User address cannot be empty!"},
        notNull : {msg: "User address must be filled!"},
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};