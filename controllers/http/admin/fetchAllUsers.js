const usersModel = require("../../../models/usersModel");
module.exports = async (req, res) => {
  try {
    const users = await usersModel.findAll();
    res.send({
      message: `users are fetch successfully`,
      code: 200,
      users: users,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
