const express = require("express");
const router = express.Router();
const {
  fetchAllGps,
  fetchAllUsers,
  totals,
  findGps,
  findUser,
  deleteUser,
  fetchChargingRequest,
  chargeAccountAccept,
  deleteChargeRequest,
  addCommand,
  deleteCommand,
  fetchCommands,
  setTypeDelay,
} = require("../controllers/http/admin/index");

router.get("/fetchAllGps", fetchAllGps);
router.get("/fetchAllUsers", fetchAllUsers);
router.get("/totals", totals);
router.get("/fetchChargingRequest", fetchChargingRequest);
router.post("/findUser", findUser);
router.post("/findGps", findGps);
router.post("/deleteUser", deleteUser);
router.post("/chargeAccountAccept", chargeAccountAccept);
router.post("/deleteChargeRequest", deleteChargeRequest);
router.post("/addCommand", addCommand);
router.post("/deleteCommand", deleteCommand);
router.post("/fetchCommands", fetchCommands);
router.post("/setTypeDelay", setTypeDelay);

module.exports = router;
