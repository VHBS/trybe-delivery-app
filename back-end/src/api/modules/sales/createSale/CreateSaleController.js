class CreateSaleController {
  constructor(createSale) {
    this.createSale = createSale;
  }

  async handle(req, res) {
    const {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products,
    } = req.body;

    const sale = await this.createSale.execute({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products,
    });

    return res.status(201).json(sale);
  }
}

module.exports = CreateSaleController;
