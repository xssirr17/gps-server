const objectModel = require("../../../models/objectModel");
const chargesModel = require("../../../models/chargeAccountModel");
const userObjectModel = require("../../../models/usersObjectsModel");
module.exports = async (req, res) => {
  try {
    const objects = await objectModel.findAll();
    let objectData = [];
    for (let item of objects) {
      const user = await userObjectModel.findOne({
        where: { object_id: item.dataValues.object_id },
      });
      const charge = await chargesModel.findOne({
        where: { object_id: item.dataValues.object_id },
      });
      objectData.push(
        Object.assign(
          item.dataValues,
          { user_id: user.dataValues.user_id },
          {
            hours:
              +charge.dataValues.hours -
              (new Date().getTime() -
                new Date(charge.dataValues.active_at).getTime()) /
                1000,
          }
        )
      );
    }
    res.send({
      message: `objects are fetch successfully`,
      code: 200,
      objects: objectData,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
