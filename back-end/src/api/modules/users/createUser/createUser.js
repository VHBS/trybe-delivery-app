const md5 = require('md5');
const userSchema = require('../../../../utils/userValidation');
const jwtFactory = require('../../../../utils/jwt/jwtFactory');

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

    const cryptoPassword = md5(password);

    const user = await this.usersRepository.create({ name, email, password: cryptoPassword, role });

    const token = jwtFactory().sign({ id: user.id, email, role });

    return { user: { id: user.id, email, role, name }, token };
  }
}

module.exports = CreateUser;
