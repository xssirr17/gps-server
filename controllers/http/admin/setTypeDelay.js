const redisClient = require("../../../db/redisConfig");

module.exports = async (req, res) => {
  try {
    const { type, delay } = req.body;
    await redisClient.set(`type_${type}`, delay);
    res.send({
      message: `object type delay updated successfully`,
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
