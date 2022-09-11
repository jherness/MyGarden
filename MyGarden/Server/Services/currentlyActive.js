const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get all activations */
async function getActiveRelays() {
  const rows = await db.query(`SELECT * 
  FROM currently_active  
  ORDER BY id DESC
  LIMIT 1`);
  const data = helper.emptyOrRows(rows);
  return data;
}


module.exports = {
    getActiveRelays
};