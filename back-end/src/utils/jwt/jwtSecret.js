const fs = require('fs');
const path = require('path');

class JwtSecret {
  static reader() {
    const secret = fs.readFileSync(
      path.resolve(__dirname, '../../../jwt.evaluation.key'),
      'utf-8',
    );
    return secret;
  }
}

module.exports = JwtSecret;