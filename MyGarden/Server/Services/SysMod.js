const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get SysMod */
async function getSysMod() {
  const rows = await db.query(`SELECT * FROM sys_mod`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*Create a SysMod*/
async function update(data) {
  const result = await db.query(
    `UPDATE sys_mod
    SET is_auto = ${data["isActive"]}, max_temp = ${data["maxTemp"]}, min_moist = ${data["minMoist"]}
  WHERE id = 1;`
  );

  let message = "Error in creating a new sys_mod";

  if (result.affectedRows) {
    message = "1 Row updated in sys_mod.";
  }

  return { message };
}
module.exports = {
  getSysMod,
  update,
};
