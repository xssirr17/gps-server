const redisClient = require("../../../db/redisConfig");
const chargeAccount = require("../../../utils/chargeObject");
module.exports = async (req, res) => {
  try {
    let objectData = req.body;
    Promise.all([
      redisClient.del(`chargeRequest_${objectData.object_id}`),
      chargeAccount(objectData),
    ]);
    res.send({
      message: `account charged successfully`,
      code: 200,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
