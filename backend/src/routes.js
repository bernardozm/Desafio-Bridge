const express = require("express");
const routes = express.routes();

const NumberController = require('./controllers/NumberController');

app.post('/calculate', NumberController.calculate);


module.exports = routes;
