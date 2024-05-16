const commandsModel = require("../../../models/commands");
module.exports = async (req, res) => {
  try {
    let commands = await commandsModel.findAll();
    res.send({
      message: `commands is fetch successfully`,
      commands: commands,
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
