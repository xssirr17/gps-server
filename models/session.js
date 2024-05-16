const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/dbConfig");

const Session = sequelize.define(
  "sessions",
  {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Session;
