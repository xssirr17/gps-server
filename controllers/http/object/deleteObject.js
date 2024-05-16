const objectModel = require("../../../models/objectModel");
// const lastDataOfGpsModel = require("../../../models/lastDataOfGpsModel");
const usersObjectsModel = require("../../../models/usersObjectsModel");
const redisClient = require("../../../db/redisConfig");

module.exports = async (req, res) => {
  try {
    const objectData = req.body;
    // await lastDataOfGpsModel.destroy({
    //   where: { gps_imei: objectData.imei },
    // });
    const gps_imei = await usersObjectsModel.findOne({
      where: { object_id: objectData.object_id },
    });
    await redisClient.del(gps_imei.gps_imei);
    await objectModel.destroy({
      where: { object_id: objectData.object_id },
    });
    await usersObjectsModel.destroy({
      where: { object_id: objectData.object_id },
    });
    res.send({
      message: "object delete successfully!",
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
