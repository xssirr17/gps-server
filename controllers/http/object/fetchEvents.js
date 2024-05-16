const eventsModel = require("../../../models/eventsModel");

module.exports = async (req, res) => {
  try {
    let object = req.body;
    let events = await eventsModel.findAll({
      where: {
        object_id: object.object_id,
        title: object.title,
      },
    });
    res.send({
      message: `events are fetched successfully`,
      events: events,
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
