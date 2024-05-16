const objectModel = require("../../../models/objectModel");

module.exports = async (req, res) => {
  try {
    const object = req.body;
    await objectModel.update(object, {
      where: { object_id: object.object_id },
    });
    res.send({
      message: `object updated successfully`,
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
