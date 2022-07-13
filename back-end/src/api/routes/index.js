const { Router } = require('express');

const routes = Router();

routes.use('/users', require('./users.routes'));
routes.use('/login', require('./login.routes'));

module.exports = routes;
