const { Router } = require('express');
const loginFactory = require('../modules/users/login/loginFactory');

const router = Router();

router.post('/', (req, res) => loginFactory().handle(req, res));

module.exports = router;
