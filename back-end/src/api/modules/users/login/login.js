const md5 = require('md5');
const loginSchema = require('../../../../utils/loginValidation');
const jwtFactory = require('../../../../utils/jwt/jwtFactory');

class Login {
  constructor(userRepository) {
    this.usersRepository = userRepository;

    this.execute = this.execute.bind(this);
  }

  async execute({ email, password }) {
    const loginValid = await loginSchema.validate({ email, password })
      .catch((err) => err.errors);
    
    if (loginValid.length > 0) {
        return { error: loginValid[0], code: 400 };
    }

    const cryptoPassword = md5(password);

    const userExists = await this.usersRepository.findOne({
      where: { email, password: cryptoPassword },
      attributes: { exclude: ['password'] },
    });

    if (!userExists) {
      return { error: 'Incorrect "email" or "password"', code: 404 };
    }

    const token = jwtFactory().sign(userExists.dataValues);

    return { user: userExists.dataValues, token };
  }
}

module.exports = Login;