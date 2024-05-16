const redisClient = require("../../../db/redisConfig");
const objectModel = require("../../../models/objectModel");
const chargeAccountModel = require("../../../models/chargeAccountModel");

module.exports = async (req, res) => {
  try {
    const objectData = req.body;
    if (await redisClient.get(objectData.gps_imei)) {
      res.send({
        message: `object already enable `,
        code: 404,
      });
    }
    const charge = await chargeAccountModel.findOne({
      where: { object_id: objectData.object_id },
    });

    if (+charge.dataValues.hours > 0) {
      await redisClient.set(objectData.gps_imei, JSON.stringify({}));
      await objectModel.update(
        { status: "enable" },
        {
          where: { object_id: objectData.object_id },
        }
      );

      await chargeAccountModel.update(
        { active_at: new Date().toString() },
        {
          where: { object_id: objectData.object_id },
        }
      );
      res.send({
        message: `object enable successfully`,
        code: 200,
      });
    } else {
      res.send({
        message: `charge the object at first`,
        code: 500,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
