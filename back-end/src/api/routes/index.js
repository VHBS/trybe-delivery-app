const { Router } = require('express');

const routes = Router();

routes.use('/users', require('./users.routes'));
routes.use('/products', require('./products.routes'));

module.exports = routes;
