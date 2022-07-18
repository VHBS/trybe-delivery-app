class GetAllSellers {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

    this.execute = this.execute.bind(this);
  }

  async execute() {
    const sellers = await this.usersRepository.findAll({
      where: { role: 'seller' },
    });

    return sellers;
  }
}

module.exports = GetAllSellers;
