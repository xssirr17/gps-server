const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const commands = sequelize.define(
  "commands",
  {
    command_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    define: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    command_code: {
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

module.exports = commands;
