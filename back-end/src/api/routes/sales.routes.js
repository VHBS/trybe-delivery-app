const { Router } = require('express');
const createSaleFactory = require('../modules/sales/createSale/CreateSaleFactory');
const getSaleByIdFactory = require('../modules/sales/getSaleById/GetSaleByIdFactory');
const getSalesBySellerIdFactory = require(
    '../modules/sales/getSalesBuSellerId/GetSalesBySellerIdFactory',
  );
const 
getSalesByUserIdFactory = require('../modules/sales/getSalesByUserId/GetSalesByUserIdFactory');
const updateSaleFactory = require('../modules/sales/updateSale/UpdateSaleFactory');

const router = Router();

router.post('/', (req, res) => createSaleFactory().handle(req, res));
router.get('/:saleId', (req, res) => getSaleByIdFactory().handle(req, res));
router.put('/:saleId', (req, res) => updateSaleFactory().handle(req, res));
router.get('/user/:userId', (req, res) => getSalesByUserIdFactory().handle(req, res));
router.get('/seller/:sellerId', (req, res) => getSalesBySellerIdFactory().handle(req, res));

module.exports = router;
