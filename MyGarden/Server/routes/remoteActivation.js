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

/*put new activation*/
router.put("/", async function (req, res, next) {
  try {
    res.json(await remote_activation.update(req.body));
  } catch (err) {
    console.error(`Error while updating remote_activation`, err.message);
    next(err);
  }
});


module.exports = router;