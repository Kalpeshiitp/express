const path = require('path')

exports.contactus = (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "view", "contact.html"));
  }

  exports.postContact=(req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "view", "success.html"));
    res.redirect('/success')
  }