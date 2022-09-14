const express = require("express");
const router = express.Router();
const sys_mod = require("../services/SysMod");

/* GET sys_mod */
router.get("/", async function (req, res, next) {
  try {
    res.json(await sys_mod.getSysMod(req.query));
  } catch (err) {
    console.error(`Error while getting sample `, err.message);
    next(err);
  }
});

/* POST sys_mod */
router.post("/", async function (req, res, next) {
  try {
    res.json(await sys_mod.create(req.body));
  } catch (err) {
    console.error(`Error while creating sample`, err.message);
    next(err);
  }
});


module.exports = router;
