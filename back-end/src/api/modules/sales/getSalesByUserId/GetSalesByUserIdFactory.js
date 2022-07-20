const { Sale, Product } = require('../../../../database/models');
const GetSaleByUserIdController = require('./GetSalesBuUserIdController');
const GetSaleByUserId = require('./GetSalesByUserId');

module.exports = function getSalesByUserIdFactory() {
  const salesRepository = Sale;
  const productsRepository = Product;
  const getSaleByUserId = new GetSaleByUserId(salesRepository, productsRepository);
  const getSaleByUserIdController = new GetSaleByUserIdController(getSaleByUserId);

  return getSaleByUserIdController;
};