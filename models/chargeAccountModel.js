const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const users = sequelize.define(
  "charges",
  {
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active_at: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    acceptOrNot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_cost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = users;
