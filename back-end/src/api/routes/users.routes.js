const { Router } = require('express');
const createUserFactory = require('../modules/users/createUser/createUserFactory');

const router = Router();

router.post('/', (req, res) => createUserFactory().handle(req, res));

module.exports = router;
