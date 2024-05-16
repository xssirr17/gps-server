const fetchAllGps = require("./fetchAllGps");
const fetchAllUsers = require("./fetchAllUsers");
const totals = require("./totals");
const findUser = require("./findUser");
const findGps = require("./findGps");
const deleteUser = require("./deleteUser");
const fetchChargingRequest = require("./fetchChargingRequest");
const chargeAccountAccept = require("./chargeAccountAccept");
const deleteChargeRequest = require("./deleteChargeRequest");
const addCommand = require("./addCommand");
const deleteCommand = require("./deleteCommand");
const fetchCommands = require("./fetchCommands");
const setTypeDelay = require("./setTypeDelay");

module.exports = {
  fetchAllGps,
  fetchAllUsers,
  totals,
  findUser,
  findGps,
  deleteUser,
  fetchChargingRequest,
  chargeAccountAccept,
  deleteChargeRequest,
  deleteCommand,
  fetchCommands,
  addCommand,
  setTypeDelay,
};
