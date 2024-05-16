const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const payload = {
    username: req.body.user_name,
  };
  const token = jwt.sign(payload, "hotprogrammers");
  res.writeHead(200, {
    "Set-Cookie": `${token}`,
  });
  return token
};
