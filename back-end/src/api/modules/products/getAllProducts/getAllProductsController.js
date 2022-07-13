class GetAllProductsController {
  constructor(getAllProducts) {
    this.getAllProducts = getAllProducts;
  }

  async handle(req, res) {
    const products = await this.getAllProducts.execute();

    return res.json(products);
  }
}

module.exports = GetAllProductsController;
