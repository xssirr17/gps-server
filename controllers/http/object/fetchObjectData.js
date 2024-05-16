const objectModel = require("../../../models/objectModel");
const redisClient = require("../../../db/redisConfig");

module.exports = async (req, res) => {
  try {
    const object = req.body;
    if (object.object_id) {
      let obj = await objectModel.findOne({
        where: { object_id: object.object_id },
      });
      if (obj?.gps_imei) {
        let gps = await redisClient.get(obj.gps_imei);
        gps = JSON.parse(gps);
        var newData = Object.assign({}, gps, obj.dataValues);
        res.send({
          message: `object is fetch successfully`,
          objectData: newData,
          code: 200,
        });
      } else {
        res.send({
          message: `object not exist`,
          code: 404,
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
