class CreateUserController {
  constructor(createUser) {
    this.createUser = createUser;
  }

  async handle(req, res) {
    const { name, email, password, role } = req.body;

    try {
      const user = await this.createUser.execute({ name, email, password, role });

      if ('error' in user) {
        return res.status(user.code).json({ message: user.error });
      }

      return res.status(201).json(user);
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = CreateUserController;
