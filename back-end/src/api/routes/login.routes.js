const { Router } = require('express');
const loginFactory = require('../modules/users/login/loginFactory');
const validateLoginFactory = require('../modules/users/validateLogin/ValidateLoginFactory');

const router = Router();

router.post('/', (req, res) => loginFactory().handle(req, res));
router.post('/validate', (req, res) => validateLoginFactory().handle(req, res));

module.exports = router;
