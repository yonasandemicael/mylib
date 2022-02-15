const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index"); // pass the name of our view
});

module.exports = router;
