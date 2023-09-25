const path = require("path");

exports.getAddproduct=(req, res, next) => {
    res.sendFile(path.join(__dirname,'..' ,'view', 'add-product.html'));
  }

  exports.postAddproduct= (req, res, next) => {
    res.redirect("/");
  }

 