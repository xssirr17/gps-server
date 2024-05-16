const usersObjectsModel = require("../../../models/usersObjectsModel");
const objectModel = require("../../../models/objectModel");
// const lastDataOfGpsModel = require("../../../models/lastDataOfGpsModel");
const redisClient = require("../../../db/redisConfig");
const chargeAccountModel = require("../../../models/chargeAccountModel");

module.exports = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const objects = await usersObjectsModel.findAll({
      where: { user_id: user_id },
    });
    let newObj = [];
    for (let object of objects) {
      object = object?.dataValues;
      let objModel = await objectModel.findOne({
        where: { object_id: object.object_id },
      });
      let remainHours = 0;
      const charge = await chargeAccountModel.findOne({
        where: { object_id: object.object_id },
      });
      if (charge) {
        if (objModel.dataValues.status == "disable") {
          remainHours = +charge.dataValues.hours;
        } else {
          remainHours =
            +charge.dataValues.hours -
            (new Date().getTime() -
              new Date(charge.dataValues.active_at).getTime()) /
              1000;
        }

        if (+remainHours <= 0) {
          await objectModel.update(
            { status: "disable" },
            {
              where: { object_id: object.object_id },
            }
          );
          objModel.dataValues.status = "disable";
        }
      }
      let lastData = await redisClient.get(object.gps_imei);
      if (lastData) {
        let delay = await redisClient.get(`type_${objModel.dataValues.type}`);
        delay = delay ?? 5;
        lastData = JSON.parse(lastData);
        objModel.dataValues.type
          ? (object.type = objModel.dataValues.type)
          : (object.type = "car");
        lastData.speed ? (object.speed = lastData.speed) : (object.speed = "0");
        new Date().getTime() - new Date(lastData.time).getTime() <
        +delay * 60 * 1000
          ? (object.engin_status = "on")
          : (object.engin_status = "off");
        object.time = lastData.time;
        object.longitude = lastData.longitude;
        object.latitude = lastData.latitude;
        object.angle = lastData.angle;
        object.status = objModel.dataValues.status;
        object.remainHours = remainHours / 60 / 60;
        object.priority = lastData.priority;
        object.satellites = lastData.satellites;
      } else {
        objModel.dataValues.type
          ? (object.type = objModel.dataValues.type)
          : (object.type = "car");
        object.status = objModel.dataValues.status;
        object.remainHours = remainHours / 60 / 60;
      }
      newObj.push(object);
    }
    res.send({
      message: `${user_id}s objects are fetched!`,
      objectsData: newObj,
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
