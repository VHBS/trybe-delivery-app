const { Router } = require('express');
const getAllProductsFactory = require('../modules/products/getAllProducts/getAllProductsFactory');

const router = Router();

router.get('/', (req, res) => getAllProductsFactory().handle(req, res));

module.exports = router;
