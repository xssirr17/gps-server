const commandsModel = require("../../../models/commands");

module.exports = async (req, res) => {
  try {
    let command = req.body;
    await commandsModel.destroy({ where: { command_id: command.command_id } });
    res.send({
      message: `commands is added successfully`,
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
