const express = require('express');
const routes = express.Router();
const NumberController = require('./controllers/NumberController');

routes.post('/calculate', NumberController.calculate);

module.exports = routes;
