const redisClient = require("../../../db/redisConfig");

module.exports = async (req, res) => {
  try {
    let newData = req?.body;
    await redisClient.set(
      `chargeRequest_${newData.object_id}`,
      JSON.stringify(newData)
    );
    res.send({
      message: "requesting to charge successfully",
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
