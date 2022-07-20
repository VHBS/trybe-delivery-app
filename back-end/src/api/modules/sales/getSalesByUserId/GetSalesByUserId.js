class GetSaleByUserId {
  constructor(salesRepository, productsRepository) {
    this.salesRepository = salesRepository;
    this.productsRepository = productsRepository;

    this.execute = this.execute.bind(this);
  }

  async execute(userId) {
    const salesWithProducts = await this.salesRepository.findAll({
      where: { userId },
      include: [
        {
          model: this.productsRepository,
          as: 'products',
        },
      ],
    });
    return salesWithProducts;
  }
}

module.exports = GetSaleByUserId;
