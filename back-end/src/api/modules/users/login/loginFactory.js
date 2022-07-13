const { User } = require('../../../../database/models');
const Login = require('./login');
const LoginController = require('./loginController');

module.exports = function loginFactory() {
  const userRepository = User;
  const login = new Login(userRepository);
  const loginController = new LoginController(login);

  return loginController;
};