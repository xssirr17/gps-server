const usersModel = require("../../../models/usersModel");
const objectModel = require("../../../models/objectModel");

module.exports = async (req, res) => {
  try {
    const users = await usersModel.findAll();
    const objects = await objectModel.findAll();
    res.send({
      message: `users are fetch successfully`,
      code: 200,
      total_users: users.length,
      total_objects: objects.length,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
