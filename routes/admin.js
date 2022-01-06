const express = require('express')


const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><label for="product">Enter a product</label><input type="text" name="product" id="product"><button type="submit">Add a product</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;