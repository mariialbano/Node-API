const express = require('express');
const Product = require('../models/product.model.js')
const router = express.Router();
const {getProduts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

router.get('/', getProduts);
router.get('/:id', getProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;