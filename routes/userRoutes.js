const express = require("express");
const router = express.Router();
const {
  userLogin,
  userLogout,
  updateInfo,
  userRegister,
  fetchData,
  fetchUserChargingObjects,
} = require("../controllers/http/user/index");

// router.post("/isAuth", isAuth);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.put("/fetchdata", fetchData);
router.put("/updateuser", updateInfo);
router.post("/register", userRegister);
router.post("/userCharging", fetchUserChargingObjects);

module.exports = router;
