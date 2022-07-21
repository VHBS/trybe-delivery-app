class ValidateLoginController {
  constructor(validateLogin) {
    this.validateLogin = validateLogin;
  }

  async handle(req, res) {
    const { authorization: token } = req.headers;

    try {
      const validJwt = await this.validateLogin.execute(token);

      return res.json(validJwt);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = ValidateLoginController;
