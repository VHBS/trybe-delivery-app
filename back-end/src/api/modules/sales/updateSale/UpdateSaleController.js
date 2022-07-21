class UpdateSaleController {
  constructor(updateSale) {
    this.updateSale = updateSale;
  }

  async handle(req, res) {
    const { saleId } = req.params;
    const { status } = req.body;

    const sale = await this.updateSale.execute(saleId, status);

    return res.json(sale);
  }
}

module.exports = UpdateSaleController;
