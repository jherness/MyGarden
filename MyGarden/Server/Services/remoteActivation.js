const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get all activations */
async function getRemoteActivation() {
  const rows = await db.query(`SELECT * 
  FROM remote_activation`);
  const data = helper.emptyOrRows(rows);
  return data;
}


module.exports = {
    getRemoteActivation
};