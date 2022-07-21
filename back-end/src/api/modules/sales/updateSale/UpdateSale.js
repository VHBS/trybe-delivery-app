class UpdateSale {
  constructor(salesRepository) {
    this.salesRepository = salesRepository;

    this.execute = this.execute.bind(this);
  }

  async execute(saleId, status) {
    const sale = await this.salesRepository.findByPk(saleId);
    sale.status = status;
    await sale.save();
    return sale;
  }
}

module.exports = UpdateSale;
