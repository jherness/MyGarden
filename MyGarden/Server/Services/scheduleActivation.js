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

/*Create a new schedule*/
async function create(data) {
  const result = await db.query(
     `INSERT INTO schedule_activation (start_hour, time_to_live,sunday,monday,
        tuesday,wednesday,thursday,friday,saturday,air_sys,water_sys,light_sys,fertelize_sys) VALUES ('${data.startTime}', ${data["timeToLive"]},
    ${data["weekSchedule"]["sunday"]}, ${data["weekSchedule"]["monday"]}, ${data["weekSchedule"]["tuesday"]},
     ${data["weekSchedule"]["wednesday"]}, ${data["weekSchedule"]["thursday"]}, ${data["weekSchedule"]["friday"]},
      ${data["weekSchedule"]["saturday"]}, ${data["systemsToActivate"]["air_sys"]},
       ${data["systemsToActivate"]["water_sys"]}, ${data["systemsToActivate"]["light_sys"]},
        ${data["systemsToActivate"]["fertelize_sys"]});`
  );

  let message = "Error in creating a new remote_activation";

  if (result.affectedRows) {
    message = "1 Row Added to remote_activation. Updated currently_active";
  }

  return { message };
}
module.exports = {
  getScheduleActivation,
  create,
};


