const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "contact.html"));
});

router.post("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "success.html"));
});
module.exports = router;
