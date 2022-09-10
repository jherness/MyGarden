const express = require("express");
const router = express.Router();
const schedule = require("../services/scheduleActivation");

/* GET schedule activation */
router.get("/", async function (req, res, next) {
  try {
    res.json(await schedule.getAllSamples(req.query));
  } catch (err) {
    console.error(`Error while getting sample `, err.message);
    next(err);
  }
});

/* POST schedule activation */
router.post("/", async function (req, res, next) {
  try {
    res.json(await schedule.create(req.body));
  } catch (err) {
    console.error(`Error while creating sample`, err.message);
    next(err);
  }
});

/* PUT schedule activation */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await schedule.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating sample`, err.message);
    next(err);
  }
});

/* DELETE schedule activation */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await schedule.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting sample`, err.message);
    next(err);
  }
});

module.exports = router;
