const express = require('express');
const { authorizeAdmin } = require('../controllers/authController');
const bookController = require('../controllers/bookController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:bookId', bookController.getBookById);

router.post('/',authController.authorizeAdmin, bookController.save);

router.put('/:bookId',authController.authorizeAdmin, bookController.update);

router.delete('/:bookId',authController.authorizeAdmin, bookController.deleteById);

module.exports = router;