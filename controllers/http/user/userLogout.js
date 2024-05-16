module.exports = async (req, res) => {
  try {
    console.log(req.session);
    req.session.destroy((err) => {
      console.log(err);
    });
    console.log(req.session);
    res.send({
      message: "user logout successfully",
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "somthing went wrong",
      code: 500,
    });
  }
};
