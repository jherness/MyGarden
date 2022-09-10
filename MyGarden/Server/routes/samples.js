const express = require("express");
const router = express.Router();
const samples = require("../services/samples");

/* GET samples */
router.get("/", async function (req, res, next) {
  try {
    res.json(await samples.getAllSamples(req.query));
  } catch (err) {
    console.error(`Error while getting sample `, err.message);
    next(err);
  }
});

/* POST samples */
router.post("/", async function (req, res, next) {
  try {
    res.json(await samples.create(req.body));
  } catch (err) {
    console.error(`Error while creating sample`, err.message);
    next(err);
  }
});

/* PUT samples */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await samples.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating sample`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await samples.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting sample`, err.message);
    next(err);
  }
});

module.exports = router;
