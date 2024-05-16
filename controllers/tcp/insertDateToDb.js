const gpsModel = require("../../models/gpsModel");
const redisClient = require("../../db/redisConfig");
const generateRotation = require("../../utils/generateRotation");
const isInsideTheLimitOrNOt = require("../../utils/isInsideTheLimitOrNot");
const limitModel = require("../../models/objectLimits");
const eventsModel = require("../../models/eventsModel");
const objectModel = require("../../models/objectModel");
const { v4: uuidv4 } = require("uuid");

module.exports = async (gpsData) => {
  try {
    let result = await redisClient.get(gpsData.gps_imei);
    if (result) {
      result = JSON.parse(result);
      if (gpsData.priority == 2) {
        gpsData.longitude = result.longitude;
        gpsData.latitude = result.latitude;
        gpsData.altitude = result.altitude;
        gpsData.satellites = result.satellites;
      }
      let angle = generateRotation(
        result.latitude,
        result.longitude,
        gpsData.latitude,
        gpsData.longitude
      );
       gpsData.angle = angle == 360 ? result.angle : angle;
       let redisGpsData = JSON.parse(JSON.stringify(gpsData));
       if (redisGpsData.priority == 3) {
         redisGpsData.longitude = result.longitude;
         redisGpsData.latitude = result.latitude;
         redisGpsData.altitude = result.altitude;
         redisGpsData.satellites = result.satellites;
       }
       Promise.all([
         redisClient.set(redisGpsData.gps_imei, JSON.stringify(redisGpsData)),
         gpsModel.create(gpsData),
         handleLimitations(gpsData),
       ]);
      console.log({
        message: "gps data with imei" + gpsData.gps_imei + "is updated!",
      });
    } else {
      console.log({
        message: "This device does not belong to any user!",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

async function handleLimitations(gpsData) {
  let redisEvent = await redisClient.get(`EVENT_${gpsData.gps_imei}`);
  if (redisEvent) return;
  let object = await objectModel.findOne({
    where: {
      gps_imei: gpsData.gps_imei,
    },
  });
  let object_id = object.object_id;
  let objectLimits = await limitModel.findAll({
    where: {
      object_id: object_id,
    },
  });
  let isEvent = false;
  if (!objectLimits) return;
  for (let limit of objectLimits) {
    if (
      isInsideTheLimitOrNOt([limit.longitude, limit.latitude], limit.radius, [
        gpsData.longitude,
        gpsData.latitude,
      ])
    ) {
      isEvent = true;
      break;
    }
  }
  if (!isEvent) {
    redisClient.setEx(`EVENT_${gpsData.gps_imei}`, 60 * 15, "event");
    eventsModel.create({
      event_id: uuidv4(),
      object_id: object_id,
      title: "limitation_event",
      message: "the gps position is outsides the limitations",
      status: "warning",
      time: new Date().toString(),
    });
  }
}
