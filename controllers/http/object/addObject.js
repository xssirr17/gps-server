const objectModel = require("../../../models/objectModel");
const usersObjectsModel = require("../../../models/usersObjectsModel");
const chargeAccountModel = require("../../../models/chargeAccountModel");
const { v4: uuidv4 } = require("uuid");
module.exports = async (req, res) => {
  try {
    let objectData = req.body;
    objectData.object_id = uuidv4();
    objectData.status = "disable";
    await objectModel.create(objectData);
    await usersObjectsModel.create({
      user_id: objectData.user_id,
      object_id: objectData.object_id,
      gps_imei: objectData.gps_imei,
    });
    await chargeAccountModel.create({
      object_id: objectData.object_id,
      hours: "0",
      total_cost: "0",
    });
    res.send({
      message: `object created successfully`,
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
