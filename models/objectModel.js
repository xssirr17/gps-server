const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const object = sequelize.define(
  "objects",
  {
    type: {
      type: DataTypes.STRING,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driver_id: {
      type: DataTypes.STRING,
    },
    gps_imei: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    engin_id: {
      type: DataTypes.STRING,
    },
    engin_type: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    odometr: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    object_control: {
      type: DataTypes.STRING,
    },
    mile_age: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = object;
