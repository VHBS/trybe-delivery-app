class GetSaleByIdController {
  constructor(getSaleById) {
    this.getSaleById = getSaleById;
  }

  async handle(req, res) {
    const { saleId } = req.params;

    const saleWithProducts = await this.getSaleById.execute(saleId);

    return res.json(saleWithProducts);
  }
}

module.exports = GetSaleByIdController;
