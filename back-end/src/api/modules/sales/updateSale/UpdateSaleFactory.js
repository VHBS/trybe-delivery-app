const { Sale } = require('../../../../database/models');
const UpdateSale = require('./UpdateSale');
const UpdateSaleController = require('./UpdateSaleController');

module.exports = function updateSaleFactory() {
  const salesRepository = Sale;
  const updateSale = new UpdateSale(salesRepository);
  const updateSaleController = new UpdateSaleController(updateSale);

  return updateSaleController;
};
