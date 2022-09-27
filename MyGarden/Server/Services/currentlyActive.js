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


async function create(data) {
  /*the query for posting a new schedule*/ 
  const result = await db.query(
     `INSERT INTO currently_active(water_sys, air_sys, light_sys, fertelize_sys)
     VALUES (${data["water_sys"]}, ${data["air_sys"]}, ${data["light_sys"]}, ${data["fertelize_sys"]});`
  );

  let message = "Error in creating a new schedule_activation";

  /*if there was no error*/
  if (result.affectedRows) {
    message = "1 Row Added to currently_active.";
  }

  return { message };
}



module.exports = {
    getActiveRelays,
    create
};