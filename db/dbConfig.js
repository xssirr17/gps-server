const Sequelize = require("sequelize");
const sequelize = new Sequelize("gps", "user", "password", {
  dialect: "mysql",
  host: "127.0.0.1",
  logging: false,
});
(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
  