class CreateSaleController {
  constructor(createSale) {
    this.createSale = createSale;
  }

  async handle(req, res) {
    try {
      const {
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products,
      } = req.body;
      const { authorization } = req.headers;
        const sale = await this.createSale.execute({ authorization }, {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products,
    });
    return res.status(201).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Server internal error' });
  }
  }
}

module.exports = CreateSaleController;
