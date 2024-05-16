const usersModel = require("../../../models/usersModel");
module.exports = async (req, res) => {
  try {
    const user = await usersModel.findOne({
      where: { email: req.body.email },
    });
    res.send({
      message: `users are fetch successfully`,
      code: 200,
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
