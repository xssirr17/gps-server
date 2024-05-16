const userModel = require("../../../models/usersModel");

module.exports = async (req, res) => {
  try {
    const newData = req?.body;
    if (!newData) {
      res.send({
        message: "data not received!",
      });
    } else {
      if (newData.password) {
        const user = await userModel.findOne({
          where: { user_id: newData.user_id },
        });
        if (user.password == newData.curPass) {
          await userModel.update(newData, {
            where: { user_id: newData.user_id },
          });
          res.send({
            message: "data updated with pass!",
            code: 201,
          });
        } else {
          delete newData.password;
          delete newData.curPass;
          await userModel.update(newData, {
            where: { user_id: newData.user_id },
          });
          res.send({
            message: "data update without pass!",
            code: 200,
          });
        }
      } else {
        delete newData.password;
        delete newData.curPass;
        await userModel.update(newData, {
          where: { user_id: newData.user_id },
        });
        res.send({
          message: "data update without pass!",
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
