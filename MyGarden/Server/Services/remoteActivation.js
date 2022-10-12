const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const notifications = require('../notifications')

/*Get latest remote activation */
async function getRemoteActivation() {
  const rows = await db.query(`SELECT * 
  FROM remote_activation`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*update a remote activation*/
async function update(data) {
  const result = await db.query(
    `UPDATE remote_activation
    SET start_data = current_timestamp(), finish_data = '${data["finishingData"]}',
    air_sys = ${data["systemsToActivate"]["air_sys"]}, water_sys = ${data["systemsToActivate"]["water_sys"]}, 
    light_sys = ${data["systemsToActivate"]["light_sys"]}, fertelize_sys = ${data["systemsToActivate"]["fertelize_sys"]}
    WHERE id = 1;`
  );

  let message = "Error in updating a new remote_activation";

  if (result.affectedRows) {
    message = "1 Row updated to remote_activation. Updated currently_active";
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
  getRemoteActivation,
  update,
};
