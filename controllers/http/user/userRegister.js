const hashPass = require("../../../utils/encryptePass");
const userModel = require("../../../models/usersModel");
const { v4: uuidv4 } = require("uuid");

module.exports = async (req, res) => {
  try {
    const user = req?.body;
    if (!user) {
      res.send({
        message: "data not received!",
      });
    } else {
      const dbUser = await userModel.findOne({
        where: { email: user.email },
      });
      if (dbUser) {
        res.send({
          message: "duplicate email!",
        });
      } else {
        user.create_at = new Date().toString();
        user.user_id = uuidv4();
        user.is_admin = "false";
        user.post_code = " ";
        user.address = " ";
        await userModel.create(user);
        res.send({
          message: "user is login successfully!",
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
