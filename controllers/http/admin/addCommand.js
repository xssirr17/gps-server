const commandsModel = require("../../../models/commands");
const { v4: uuidv4 } = require("uuid");

module.exports = async (req, res) => {
  try {
    let command = req.body;
    command.command_id = uuidv4();
    await commandsModel.create(command);
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
