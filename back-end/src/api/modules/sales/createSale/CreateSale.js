const jwtFactory = require('../../../../utils/jwt/jwtFactory');

class CreateSale {
  constructor(salesRepository, salesProductsRepository) {
    this.salesRepository = salesRepository;
    this.salesProductsRepository = salesProductsRepository;

    this.execute = this.execute.bind(this);
  }

  async execute({ authorization },
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) {
    jwtFactory().verify(authorization);
    const sale = await this.salesRepository.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
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
