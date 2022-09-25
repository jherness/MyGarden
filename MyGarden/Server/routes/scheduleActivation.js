const express = require("express");
const router = express.Router();
const schedule_activation = require("../services/scheduleActivation"); //importing all the services

/* GET latese schedule */
/*first param is route url, and second is the async function that posts.
the function req is the body (if needed) and the query(if needed)*/
router.get("/", async function (req, res, next) {
  try {
    res.json(await schedule_activation.getScheduleActivation(req.query));
  } catch (err) {
    console.error(`Error while getting schedule activation `, err.message);
    next(err);
  }
});

/*Post new schedule*/
/*first param is route url, and second is the async function that posts.
the function req is the body (if needed) and the query(if needed)*/
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
