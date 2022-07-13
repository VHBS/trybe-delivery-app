const { Product } = require('../../../../database/models');
const GetAllProducts = require('./getAllProducts');
const GetAllProductsController = require('./getAllProductsController');

module.exports = function getAllProductsFactory() {
  const productsRepository = Product;
  const getAllProducts = new GetAllProducts(productsRepository);
  const getAllProductsController = new GetAllProductsController(getAllProducts);

  return getAllProductsController;
};
