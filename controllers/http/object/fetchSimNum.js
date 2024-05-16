const gpsModel = require("../../../models/gpsModel");
module.exports = async (req, res) => {
  try {
    let object = req.body;
    let gps = await gpsModel.findOne({
      where: {
        gps_imei: object.gps_imei,
      },
    });
    res.send({
      message: `gps number fetched successfully`,
      number: gps.simcardNumber,
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
