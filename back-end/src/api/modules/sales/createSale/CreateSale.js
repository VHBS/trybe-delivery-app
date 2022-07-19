class CreateSale {
  constructor(salesRepository, salesProductsRepository) {
    this.salesRepository = salesRepository;
    this.salesProductsRepository = salesProductsRepository;

    this.execute = this.execute.bind(this);
  }

  async execute({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) {
    const sale = await this.salesRepository.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'pending',
    });

    await Promise.all(
      products.map((product) => this.salesProductsRepository.create({
        saleId: sale.id,
        productId: product.id,
        quantity: product.quantity,
      })),
    );
    
    return sale;
  }
}

module.exports = CreateSale;
