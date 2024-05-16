const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const tasks = sequelize.define(
  "tasks",
  {

    task_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
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

module.exports = tasks;
