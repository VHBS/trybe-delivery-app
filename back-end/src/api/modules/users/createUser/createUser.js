const userSchema = require('../../../../utils/userValidation');

class CreateUser {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

    this.execute = this.execute.bind(this);
  }

  async execute({ name, email, password, role = 'customer' }) {
    const userValid = await userSchema.validate({ name, email, password })
      .catch((err) => err.errors);

    if (userValid.length > 0) {
      return { error: userValid[0], code: 400 };
    }

    const userExists = await this.usersRepository.findOne({
      where: { email },
    });

    if (userExists) {
      return { error: 'User alredy exists', code: 409 };
    }

    const user = await this.usersRepository.create({ name, email, password, role });

    return user;
  }
}

module.exports = CreateUser;
