const { SaleProduct } = require('../../../../database/models');

class GetSaleById {
  constructor(salesRepository, productsRepository) {
    this.salesRepository = salesRepository;
    this.productsRepository = productsRepository;

    this.execute = this.execute.bind(this);
  }

  async execute(saleId) {
    const saleWithProducts = await this.salesRepository.findOne({
      where: { id: saleId },
      include: [
        {
          model: this.productsRepository,
          as: 'products',
        },
        // {
        //   model: this.salesRepository,
        //   as: 'sales',
        // },
      ],
    });
    return saleWithProducts;
  }
}

module.exports = GetSaleById;
