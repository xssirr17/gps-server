const objectLimits = require("../../../models/objectLimits");

module.exports = async (req, res) => {
  try {
    let limit = req.body;
    await objectLimits.destroy({
      where: { limit_id: limit.limit_id },
    });
    res.send({
      message: `limit is deleted successfully`,
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
