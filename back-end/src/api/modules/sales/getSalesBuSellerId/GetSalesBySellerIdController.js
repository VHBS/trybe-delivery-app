class GetSaleBySellerIdController {
  constructor(getSalesBySellerId) {
    this.getSalesBySellerId = getSalesBySellerId;
  }

  async handle(req, res) {
    const { sellerId } = req.params;

    const salesWithProducts = await this.getSalesBySellerId.execute(sellerId);

    return res.json(salesWithProducts);
  }
}

module.exports = GetSaleBySellerIdController;