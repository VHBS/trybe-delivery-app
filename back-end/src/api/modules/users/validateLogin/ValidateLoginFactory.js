const ValidateLogin = require('./ValidateLogin');
const ValidateLoginController = require('./ValidateLoginController');

module.exports = function validateLoginFactory() {
  const validateLogin = new ValidateLogin();
  const validateLoginController = new ValidateLoginController(validateLogin);

  return validateLoginController;
};
