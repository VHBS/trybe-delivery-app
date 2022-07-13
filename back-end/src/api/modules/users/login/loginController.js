class LoginController {
  constructor(login) {
    this.login = login;

    this.handle = this.handle.bind(this);
  }

  async handle(req, res) {
    const { email, password } = req.body;

    try {
      const user = await this.login.execute({ email, password });

      if ('error' in user) {
        return res.status(user.code).json({ message: user.error });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = LoginController;