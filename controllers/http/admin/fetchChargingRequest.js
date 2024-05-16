const redisClient = require("../../../db/redisConfig");
const objectModel = require("../../../models/objectModel");
const usersObjectsModel = require("../../../models/usersObjectsModel");
const userModel = require("../../../models/usersModel");

module.exports = async (req, res) => {
  try {
    let chargeRequests = await redisClient.keys("chargeRequest_*");
    let requests = [];
    for (let key of chargeRequests) {
      requests.push(redisClient.get(key));
    }
    requests = await Promise.all(requests);
    for (let i = 0; i < requests.length; i++) {
      try {
        requests[i] = JSON.parse(requests[i]);
        let gps = await objectModel.findOne({
          where: { object_id: requests[i].object_id },
        });
        let userId = await usersObjectsModel.findOne({
          where: { gps_imei: gps.gps_imei },
        });
        let user = await userModel.findOne({
          where: { user_id: userId.user_id },
        });
        requests[i].gps_imei = gps.gps_imei;
        requests[i].email = user.email;
      } catch (err) {
        continue;
      }
    }
    res.send({
      message: `chargeRequests are fetch successfully`,
      code: 200,
      chargeRequests: requests,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
