class GetSaleByUserIdController {
  constructor(getSalesByUserId) {
    this.getSalesByUserId = getSalesByUserId;
  }

  async handle(req, res) {
    const { userId } = req.params;

    const salesWithProducts = await this.getSalesByUserId.execute(userId);

    return res.json(salesWithProducts);
  }
}

module.exports = GetSaleByUserIdController;
