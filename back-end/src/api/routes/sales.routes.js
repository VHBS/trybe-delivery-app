const { Router } = require('express');
const createSaleFactory = require('../modules/sales/createSale/CreateSaleFactory');

const router = Router();

router.post('/', (req, res) => createSaleFactory().handle(req, res));

module.exports = router;
