const usersObjectsModel = require("../../../models/usersObjectsModel");
const chargeAccountModel = require("../../../models/chargeAccountModel");

module.exports = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const objects = await usersObjectsModel.findAll({
      where: { user_id: user_id },
    });
    let charges = [];
    for (let object of objects) {
      object = object?.dataValues;
      const charge = await chargeAccountModel.findOne({
        where: { object_id: object.object_id },
      });
      charges.push(charge);
    }
    res.send({
      message: `${user_id}s objects charges are fetched!`,
      objectsData: charges,
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
