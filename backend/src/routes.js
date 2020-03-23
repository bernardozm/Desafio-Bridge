const express = require("express");
const routes = express.routes();

const NumberController = require('./controllers/NumberController')

app.post('/calculate', (req, res) =>{
    return res.json(NumberController.calculate)
});


module.exports = routes;
