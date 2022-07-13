const { User } = require('../../../../database/models');
const CreateUser = require('./createUser');
const CreateUserController = require('./createUserController');

module.exports = function createUserFactory() {
  const usersRepository = User;
  const createUser = new CreateUser(usersRepository);
  const createUserController = new CreateUserController(createUser);

  return createUserController;
};
