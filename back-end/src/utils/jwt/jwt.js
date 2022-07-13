const jwt = require('jsonwebtoken');

class Jwt {
  constructor(secret) {
    this.secret = secret;

    this.sign = this.sign.bind(this);
    this.verify = this.verify.bind(this);
  }

  sign(data) {
    return jwt.sign({ data }, this.secret, { expiresIn: '7d', algorithm: 'HS256' });
  }

  verify(token) {
    return jwt.verify(token, this.secret);
  }
}

module.exports = Jwt;