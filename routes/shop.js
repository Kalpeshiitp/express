const express = require("express");
const router = express.Router();
const productController = require('../controllers/shop')

router.get("/", productController.getProducts);

module.exports= router;