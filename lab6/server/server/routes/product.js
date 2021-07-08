const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/:prodId', productController.getProductById);

router.post('/', authController.authorizeAdmin, productController.save);

router.put('/:prodId', authController.authorizeAdmin, productController.update);

router.delete('/:prodId', authController.authorizeAdmin, productController.deleteById);

module.exports = router;