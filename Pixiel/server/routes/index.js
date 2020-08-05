const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Il server è funzionante" }).status(200);
});

module.exports = router;
