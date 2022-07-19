const { Sale, SaleProduct } = require('../../../../database/models');
const CreateSale = require('./CreateSale');
const CreateSaleController = require('./CreateSaleController');

module.exports = function createSaleFactory() {
  const salesRepository = Sale;
  const salesProductsRepository = SaleProduct;
  const createSale = new CreateSale(salesRepository, salesProductsRepository);
  const createSaleController = new CreateSaleController(createSale);

  return createSaleController;
};
