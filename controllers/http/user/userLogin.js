const hashPass = require("../../../utils/encryptePass");
const userModel = require("../../../models/usersModel");

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
      if (!dbUser) {
        res.send({
          message: "invalid username!",
        });
      } else if (user.password == dbUser.password) {
        res.send({
          message: "user is login successfully!",
          code: 200,
          user_id: dbUser.user_id,
          idAdmin: dbUser.is_admin,
        });
      } else {
        res.send({
          message: "username or password incorrect!",
          code: 404,
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
