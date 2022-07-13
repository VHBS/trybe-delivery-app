class GetAllProducts {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;

    this.execute = this.execute.bind(this);
  }

  async execute() {
    const products = await this.productsRepository.findAll();

    return products;
  }
}

module.exports = GetAllProducts;
