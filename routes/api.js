//Dependencies

var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');

//Routes

// router.get('/products', function(request, response) {
//     response.send('API is working');
// });

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

//Return router

module.exports = router;