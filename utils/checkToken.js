const jwt = require('jsonwebtoken')
const cookieParser = require('./cookieParser')

module.exports = (req, res) => {
  const cookieHeader = req.headers.cookie
  console.log(req);
/*   const cookie = cookieParser(cookieHeader)
  if (jwt.verify(cookie, 'hotprogrammers')) {
    return true
  }
  return false */
}
