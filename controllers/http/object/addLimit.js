const objectLimits = require("../../../models/objectLimits");
const { v4: uuidv4 } = require("uuid");

module.exports = async (req, res) => {
  try {
    let limit = req.body;
    limit.limit_id = uuidv4();
    limit.create_at = new Date().toString();
    await objectLimits.create(limit);
    res.send({
      message: `limit is added successfully`,
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
