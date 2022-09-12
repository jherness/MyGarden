const express = require("express");
const router = express.Router();
const schedule_activation = require("../services/scheduleActivation");

/* GET latese schedule */
router.get("/", async function (req, res, next) {
  try {
    res.json(await schedule_activation.getScheduleActivation(req.query));
  } catch (err) {
    console.error(`Error while getting schedule activation `, err.message);
    next(err);
  }
});

/*Post new activation*/
router.post("/", async function (req, res, next) {
  try {
    res.json(await schedule_activation.create(req.body));
  } catch (err) {
    console.error(
      `Error while creating schedule_activation new data`,
      err.message
    );
    next(err);
  }
});

module.exports = router;
