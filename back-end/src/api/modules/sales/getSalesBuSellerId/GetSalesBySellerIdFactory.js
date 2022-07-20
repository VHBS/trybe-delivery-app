const { Sale, Product } = require('../../../../database/models');
const GetSaleBySellerId = require('./GetSalesBySellerId');
const GetSaleBySellerIdController = require('./GetSalesBySellerIdController');

module.exports = function getSalesByUserIdFactory() {
  const salesRepository = Sale;
  const productsRepository = Product;
  const getSaleBySellerId = new GetSaleBySellerId(salesRepository, productsRepository);
  const getSaleBySellerIdController = new GetSaleBySellerIdController(getSaleBySellerId);

  return getSaleBySellerIdController;
};