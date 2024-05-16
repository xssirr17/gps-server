const userModel = require("../../../models/usersModel");

module.exports = async (req, res) => {
  try {
    const newData = req?.body;
    if (!newData) {
      res.send({
        message: "data not received!",
      });
    } else {
      let user = await userModel.findOne({
        where: { user_id: newData.user_id },
      });
      const newUser = {
        firstName: user.first_name,
        lastName: user.last_name,
        phone: user.phone,
        email: user.email,
        city: user.city,
        country: user.country,
        address: user.address,
        postCode: user.post_code,
        create_at: new Date(user.create_at).toLocaleDateString(),
      };
      res.send({
        message: "data fetch successfully",
        code: 200,
        userData: newUser,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
