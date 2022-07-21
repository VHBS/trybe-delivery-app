const jwtFactory = require('../../../../utils/jwt/jwtFactory');

class ValidateLogin {
  constructor() {
    this.jwtService = jwtFactory;
    this.execute = this.execute.bind(this);
  }

  async execute(token) {
    const validJwt = this.jwtService().verify(token);

    return validJwt;
  }
}

module.exports = ValidateLogin;
