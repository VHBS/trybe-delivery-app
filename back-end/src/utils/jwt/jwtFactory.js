const JwtSecret = require('./jwtSecret');
const Jwt = require('./jwt');

module.exports = function jwtFactory() {
  const jwtSecret = JwtSecret.reader();
  const jwt = new Jwt(jwtSecret);

  return jwt;
};