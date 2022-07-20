const { Sale, Product } = require('../../../../database/models');
const GetSaleByUserIdController = require('./GetSalesBuUserIdController');
const GetSaleByUserId = require('./GetSalesByUserId');

module.exports = function getSalesByUserIdFactory() {
  const salesRepository = Sale;
  const productsRepository = Product;
  const getSaleById = new GetSaleByUserId(salesRepository, productsRepository);
  const getSaleByIdController = new GetSaleByUserIdController(getSaleById);

  return getSaleByIdController;
};