class GetSaleBySellerId {
  constructor(salesRepository, productsRepository) {
    this.salesRepository = salesRepository;
    this.productsRepository = productsRepository;

    this.execute = this.execute.bind(this);
  }

  async execute(sellerId) {
    const salesWithProducts = await this.salesRepository.findAll({
      where: { sellerId },
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

module.exports = GetSaleBySellerId;