const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const limits = sequelize.define(
  "limits",
  {
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    limit_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    create_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    radius: {
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

module.exports = limits;
