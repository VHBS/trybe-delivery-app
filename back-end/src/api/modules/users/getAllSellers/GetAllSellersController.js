class GetAllSellersController {
  constructor(getAllSellers) {
    this.getAllSellers = getAllSellers;
  }

  async handle(req, res) {
    const sellers = await this.getAllSellers.execute();

    return res.status(200).json(sellers);
  }
}

module.exports = GetAllSellersController;
