const { Sale, Product } = require('../../../../database/models');
const GetSaleById = require('./GetSaleById');
const GetSaleByIdController = require('./GetSaleByIdController');

module.exports = function getSaleByIdFactory() {
  const salesRepository = Sale;
  const productsRepository = Product;
  const getSaleById = new GetSaleById(salesRepository, productsRepository);
  const getSaleByIdController = new GetSaleByIdController(getSaleById);

  return getSaleByIdController;
};
