const crypto = require('crypto')

module.exports = password => {
  let mykey = crypto.createCipher('aes-128-cbc', 'mypassword')
  let mystr = mykey.update(password, 'utf8', 'hex')
  mystr += mykey.final('hex')
  return mystr
}
