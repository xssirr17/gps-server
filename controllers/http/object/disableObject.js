const redisClient = require("../../../db/redisConfig");
const objectModel = require("../../../models/objectModel");
const chargeAccountModel = require("../../../models/chargeAccountModel");

module.exports = async (req, res) => {
  try {
    const objectData = req.body;
    if (!(await redisClient.get(objectData.gps_imei))) {
      res.send({
        message: `object already disable `,
        code: 404,
      });
    }
    await redisClient.del(objectData.gps_imei);
    await objectModel.update(
      { status: "disable" },
      {
        where: { object_id: objectData.object_id },
      }
    );
    const charge = await chargeAccountModel.findOne({
      where: { object_id: objectData.object_id },
    });
    const newHours =
      +charge.dataValues.hours -
      (new Date().getTime() - new Date(charge.dataValues.active_at).getTime()) /
        1000;
    await chargeAccountModel.update(
      { hours: newHours, active_at: null },
      {
        where: { object_id: objectData.object_id },
      }
    );
    res.send({
      message: `object disable successfully`,
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
