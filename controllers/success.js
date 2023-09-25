const path = require('path')
exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','view','success.html'))
  }