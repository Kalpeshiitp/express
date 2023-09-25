const path = require("path");

exports.getProducts= (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','view','shop.html'))
  }