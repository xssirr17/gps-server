const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const object = sequelize.define(
  "user_objects",
  {
    object_id: {
      type: DataTypes.STRING,
      allowNull: false, 
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gps_imei: {
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

module.exports = object;
