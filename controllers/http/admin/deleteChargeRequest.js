const redisClient = require("../../../db/redisConfig");
module.exports = async (req, res) => {
  try {
    let objectData = req.body;
    await redisClient.del(`chargeRequest_${objectData.object_id}`);
    res.send({
      message: `charge request removed successfully`,
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
