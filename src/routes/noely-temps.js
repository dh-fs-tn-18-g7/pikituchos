const express = require("express")
const homeController = require('../controllers/HomeController')
router = express.Router();

router.get("/produto", homeController.produto);

/* [ exports ]
=========================================== */
module.exports = router;
