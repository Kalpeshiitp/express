const path = require('path')
const express = require("express");
const successController = require('../controllers/success')
const router = express.Router();

router.get('/success',successController.getSuccess );

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','view','success.html'))
  });

module.exports= router;
