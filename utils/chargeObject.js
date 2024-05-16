const chargeAccountModel = require("../models/chargeAccountModel");

module.exports = async (newData) => {
  if (!newData) {
    res.send({
      message: "data not received!",
    });
  } else {
    const charge = await chargeAccountModel.findOne({
      where: { object_id: newData.object_id },
    });
    if (charge) {
      if (+charge.dataValues.hours > 0) {
        await chargeAccountModel.update(
          {
            hours: (
              +charge.dataValues.hours +
              +newData.hours * 60 * 60
            ).toString(),
            total_cost: +newData.total_cost + +charge.dataValues.total_cost,
          },
          {
            where: { object_id: newData.object_id },
          }
        );
      } else {
        await chargeAccountModel.update(
          {
            hours: (+newData.hours * 60 * 60).toString(),
            total_cost: +newData.total_cost + +charge.dataValues.total_cost,
          },
          {
            where: { object_id: newData.object_id },
          }
        );
      }
      return {
        message: "account charge successfully!",
        code: 200,
      };
    } else {
      newData.hours = +newData.hours * 60 * 60;
      await chargeAccountModel.create(newData);
      return {
        message: "account charge successfully!",
        code: 200,
      };
    }
  }
};
