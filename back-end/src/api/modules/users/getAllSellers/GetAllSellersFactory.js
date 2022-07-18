const { User } = require('../../../../database/models');
const GetAllSellers = require('./GetAllSellers');
const GetAllSellersController = require('./GetAllSellersController');

module.exports = function getAllSellersFactory() {
  const usersRepository = User;
  const getAllSellers = new GetAllSellers(usersRepository);
  const getAllSellersController = new GetAllSellersController(getAllSellers);

  return getAllSellersController;
};
