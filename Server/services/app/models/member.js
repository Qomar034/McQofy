'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Member.hasMany(models.Favorites, {foreignKey: "MemberId"})
    }
  }
  Member.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Member first name cannot be empty!"},
        notNull : {msg: "Member first name must be filled!"},
      },
    },
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Member username cannot be empty!"},
        notNull : {msg: "Member username must be filled!"},
      },
      unique: {msg: "Member with this username already exist."}
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Member email cannot be empty!"},
        notNull : {msg: "Member email must be filled!"},
      },
      unique: {msg: "Member with this email already exist."}
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Member phone number cannot be empty!"},
        notNull : {msg: "Member phone number must be filled!"},
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Member password cannot be empty!"},
        notNull : {msg: "Member password must be filled!"},
        len: {args:[8, 1000], msg: 'Member password must be at least 8 characters'}
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Member gender cannot be empty!"},
        notNull : {msg: "Member gender must be filled!"},
      },
    },
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};