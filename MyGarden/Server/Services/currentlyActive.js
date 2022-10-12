const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const notifications = require('../notifications')
/*Get all activations */
async function getActiveRelays() {
  const rows = await db.query(`SELECT * 
  FROM currently_active`);
  const data = helper.emptyOrRows(rows);
  return data;
}

async function update(data) {
  /*the query for posting a new schedule*/
  const result = await db.query(
    `UPDATE currently_active
     SET air_sys = ${data["air_sys"]}, water_sys = ${data["water_sys"]}, light_sys = ${data["light_sys"]},
      fertelize_sys = ${data["fertelize_sys"]}
     WHERE id = 1;`
  );

  let message = "Error in creating a new schedule_activation";

  /*if there was no error*/
  if (result.affectedRows) {
    message = "1 Row updated to currently_active.";
    if (data["air_sys"] === 0 && data["water_sys"] === 0 &&
      data["light_sys"] === 0 && data["fertelize_sys"] === 0) {
      notifications.sendDeactivationNotification()
    }
    else {
      notifications.sendActivationNotification()
    }
  }

  return { message };
}

module.exports = {
  getActiveRelays,
  update,
};
