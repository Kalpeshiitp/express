const path = require("path");
const express = require("express");
const contactusController = require('../controllers/contact')

const router = express.Router();

router.get("/contact", contactusController.contactus);
router.post("/contact", contactusController.postContact);

module.exports = router;
