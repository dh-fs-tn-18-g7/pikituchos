const express = require ('express')
const CheckoutController = require('../controllers/CheckoutController')
const logged = require('../middlewares/logged')

const router = express.Router()

router.get('/checkout', logged, CheckoutController.showCheckout)

module.exports = router