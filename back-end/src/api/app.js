const express = require('express');
const routes = require('./routes');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());
app.use(routes);

module.exports = app;
