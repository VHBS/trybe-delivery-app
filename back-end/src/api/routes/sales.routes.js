const { Router } = require('express');
const createSaleFactory = require('../modules/sales/createSale/CreateSaleFactory');
const getSaleByIdFactory = require('../modules/sales/getSaleById/GetSaleByIdFactory');

const router = Router();

router.post('/', (req, res) => createSaleFactory().handle(req, res));
router.get('/:saleId', (req, res) => getSaleByIdFactory().handle(req, res));

module.exports = router;
