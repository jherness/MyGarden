const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get latest schedule */
async function getSysMod() {
  const rows = await db.query(`SELECT * FROM sys_mod order by id Desc Limit 1`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*Create a new schedule*/
async function create(data) {
  const result = await db.query(
     `INSERT INTO sys_mod values (${data.isActive}, ${data.max_temp}, ${data.min_moist} )`
  );

  let message = "Error in creating a new remote_activation";

  if (result.affectedRows) {
    message = "1 Row Added to remote_activation. Updated currently_active";
  }

  return { message };
}
module.exports = {
    getSysMod,
  create,
};


