const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get latest schedule */
async function getScheduleActivation() {
  const rows = await db.query(`SELECT * 
  FROM schedule_activation order by id Desc Limit 1`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*update a new schedule. parameter data is json object which consists of all
the data nesseccery for schedule_activation table in DB*/
async function update(data) {
  /*the query for posting a new schedule*/
  const result = await db.query(
    `UPDATE schedule_activation
    SET start_hour = ${data["startTime"]}, time_to_live = ${data["timeToLive"]},
    sunday =  ${data["weekSchedule"]["sunday"]}, monday = ${data["weekSchedule"]["monday"]},
    tuesday = ${data["weekSchedule"]["tuesday"]}, wednesday = ${data["weekSchedule"]["wednesday"]},
    thursday = ${data["weekSchedule"]["thursday"]}, friday = ${data["weekSchedule"]["friday"]},
    saturday = ${data["weekSchedule"]["saturday"]}, air_sys =  ${data["systemsToActivate"]["air_sys"]},
    water_sys =  ${data["systemsToActivate"]["water_sys"]}, light_sys =  ${data["systemsToActivate"]["light_sys"]},
    fertelize_sys =  ${data["systemsToActivate"]["fertelize_sys"]}
    WHERE id = 1;`
  );

  let message = "Error in creating a new schedule_activation";

  /*if there was no error*/
  if (result.affectedRows) {
    message = "1 Row Added to schedule_activation.";
  }

  return { message };
}
module.exports = {
  getScheduleActivation,
  update,
};
