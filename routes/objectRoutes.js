const express = require("express");
const router = express.Router();
const {
  addObject,
  deleteObject,
  fetchObjectData,
  fetchUserObjects,
  updateObject,
  fetchHistory,
  disableObject,
  enableObject,
  remainDayCharge,
  chargingAccount,
  addLimit,
  deleteLimit,
  fetchLimits,
  fetchEvents,
  fetchCommands,
  fetchSimNum,
} = require("../controllers/http/object/index");

router.post("/addObject", addObject);
router.post("/disableObject", disableObject);
router.post("/enableObject", enableObject);
router.put("/remaindays", remainDayCharge);
router.post("/deleteObject", deleteObject);
router.post("/fetchObjectData", fetchObjectData);
router.post("/fetchUserObject", fetchUserObjects);
router.post("/updateObject", updateObject);
router.post("/fetchHistory", fetchHistory);
router.post("/chargingObject", chargingAccount);
router.post("/addLimit", addLimit);
router.post("/deleteLimit", deleteLimit);
router.post("/fetchLimits", fetchLimits);
router.post("/fetchEvents", fetchEvents);
router.post("/fetchCommands", fetchCommands);
router.post("/fetchGpsNumber", fetchSimNum);

module.exports = router;
