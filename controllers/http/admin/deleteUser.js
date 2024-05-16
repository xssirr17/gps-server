const usersModel = require("../../../models/usersModel");
module.exports = async (req, res) => {
  try {
    await usersModel.destroy({
      where: { user_id: req.body.userId },
    });
    res.send({
      message: `users are fetch successfully`,
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
