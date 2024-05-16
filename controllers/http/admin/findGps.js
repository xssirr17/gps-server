const objectModel = require("../../../models/objectModel");
const chargesModel = require("../../../models/chargeAccountModel");
const userObjectModel = require("../../../models/usersObjectsModel");
module.exports = async (req, res) => {
  try {
    const object = await objectModel.findOne({
      where: { gps_imei: req.body.imei },
    });
    const user = await userObjectModel.findOne({
      where: { object_id: object.dataValues.object_id },
    });
    const charge = await chargesModel.findOne({
      where: { object_id: object.dataValues.object_id },
    });
    const objectData = Object.assign(
      object.dataValues,
      { user_id: user.dataValues.user_id },
      {
        hours:
          +charge.dataValues.hours -
          (new Date().getTime() -
            new Date(charge.dataValues.active_at).getTime()) /
            1000,
      }
    );
    res.send({
      message: `users are fetch successfully`,
      code: 200,
      objectData: objectData,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
