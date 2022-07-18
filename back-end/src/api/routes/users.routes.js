const { Router } = require('express');
const createUserFactory = require('../modules/users/createUser/createUserFactory');
const getAllSellersFactory = require('../modules/users/getAllSellers/GetAllSellersFactory');

const router = Router();

router.post('/', (req, res) => createUserFactory().handle(req, res));
router.get('/sellers', (req, res) => getAllSellersFactory().handle(req, res));

module.exports = router;
