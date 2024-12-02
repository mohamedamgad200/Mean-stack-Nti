const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("<h1>hello from about get</h1>");
});
router.post("/", (req, res) => {
  res.send("<h1>hello from about post</h1>");
});
module.exports = router;
