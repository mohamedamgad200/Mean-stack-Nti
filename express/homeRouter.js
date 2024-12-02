const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  res.send("<h1>hello from home post</h1>");
});
router.get("/", (req, res) => {
  res.send("<h1>hello from home get</h1>");
});

module.exports = router;
