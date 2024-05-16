const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const events = sequelize.define(
  "events",
  {

    event_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
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

module.exports = events;
