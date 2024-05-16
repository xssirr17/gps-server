const objectLimits = require("../../../models/objectLimits");

module.exports = async (req, res) => {
  try {
    let object = req.body;
    let limits = await objectLimits.findAll({
      where: {
        object_id: object.object_id,
      },
    });
    res.send({
      message: `limits are fetched successfully`,
      limits: limits,
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
