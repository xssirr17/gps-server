const chargeAccountModel = require("../../../models/chargeAccountModel");

module.exports = async (req, res) => {
  try {
    const newData = req?.body;
    if (!newData) {
      res.send({
        message: "data not received!",
      });
    } else {
      const charge = await chargeAccountModel.findOne({
        where: { object_id: newData.object_id },
      });
      if (charge) {
        res.send({
          remain: charge.dataValues.hours / 60 / 60,
          code: 200,
        });
      } else {
        res.send({
          remain: 0,
          code: 200,
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
