const express = require("express");
const router = express.Router();
const activationHistory = require("../services/activationHistory");

/* GET samples */
router.get("/", async function (req, res, next) {
  try {
    res.json(await activationHistory.getAllActivations(req.query));
  } catch (err) {
    console.error(`Error while getting activation history `, err.message);
    next(err);
  }
});


module.exports = router;
