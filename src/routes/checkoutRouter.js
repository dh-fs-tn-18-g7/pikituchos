const express = require ('express')
const CheckoutController = require('../controllers/CheckoutController')

const router = express.Router()

router.get('/checkout', CheckoutController.showCheckout)

module.exports = router