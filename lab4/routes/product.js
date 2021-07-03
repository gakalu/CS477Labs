const express = require('express');
const path = require('path');

const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
});

module.exports = router;