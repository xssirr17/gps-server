// const lastDataOfGpsModel = require("../../../models/lastDataOfGpsModel");
const gpsModel = require("../../../models/gpsModel");
const objectModel = require("../../../models/objectModel");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  try {
    const date = req.body;
    const start = new Date(date.startDate).getTime();
    const end = new Date(date.endDate).getTime();
    const object = await objectModel.findOne({
      where: { object_id: date.object_id },
    });
    let history = await gpsModel.findAll({
      where: {
        gps_imei: object.gps_imei,
      },
    });
    let betweenHistory = [];
    history.forEach((element) => {
      const time = new Date(element.dataValues.time).getTime();
      if (start == end) {
        if (time >= start && time <= end + 86400000) {
          const newElement = {
            time: element.time,
            longitude: element.longitude,
            latitude: element.latitude,
            altitude: element.altitude,
            angle: element.angle,
            satellites: element.satellites,
            speed: element.speed,
          };
          betweenHistory.push(newElement);
        }
      } else {
        if (time >= start && time <= end) {
          const newElement = {
            time: element.time,
            longitude: element.longitude,
            latitude: element.latitude,
            altitude: element.altitude,
            angle: element.angle,
            satellites: element.satellites,
            speed: element.speed,
          };
          betweenHistory.push(newElement);
        }
      }
    });

    res.send({
      message: `history is fetch successfully`,
      history: betweenHistory,
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
