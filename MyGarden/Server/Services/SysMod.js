const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get SysMod */
async function getSysMod() {
  const rows = await db.query(`SELECT * FROM sys_mod order by id Desc Limit 1`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*Create a SysMod*/
async function create(data) {
  const result = await db.query(
     `INSERT INTO sys_mod (is_auto, max_temp, min_moist) values (${data.isActive}, ${data.maxTemp}, ${data.minMoist} )`
  );

  let message = "Error in creating a new sys_mod";

  if (result.affectedRows) {
    message = "1 Row Added to sys_mod.";
  }

  return { message };
}
module.exports = {
    getSysMod,
  create,
};


