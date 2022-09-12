const express = require("express");
const router = express.Router();
const remote_activation = require("../services/remoteActivation");

/* GET remoteActivation */
router.get("/", async function (req, res, next) {
  try {
    res.json(await remote_activation.getRemoteActivation(req.query));
  } catch (err) {
    console.error(`Error while getting activation history `, err.message);
    next(err);
  }
});

/*Post new activation*/
router.post("/", async function (req, res, next) {
  try {
    res.json(await remote_activation.create(req.body));
  } catch (err) {
    console.error(`Error while creating remote_activation new data`, err.message);
    next(err);
  }
});


module.exports = router;