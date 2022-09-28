const express = require("express");
const router = express.Router();
const currently_active = require("../services/currentlyActive");

/* GET curently active relays */
router.get("/", async function (req, res, next) {
  try {
    res.json(await currently_active.getActiveRelays(req.query));
  } catch (err) {
    console.error(`Error while getting activation history `, err.message);
    next(err);
  }
});

router.put("/", async function (req, res, next) {
  try {
    res.json(await currently_active.update(req.body));
  } catch (err) {
    console.error(
      `Error while updating currently_active new data`,
      err.message
    );
    next(err);
  }
});

module.exports = router;
