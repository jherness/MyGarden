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
    SET start_hour = '00:00:00', time_to_live = 1, sunday = 1, monday = 1, tuesday = 1,
     wednesday = 1, thursday = 1, friday = 1, saturday = 1,
    air_sys = 1, water_sys =1, light_sys = 1, fertelize_sys = 1
    WHERE id = 1;`


     `INSERT INTO schedule_activation (start_hour, time_to_live,sunday,monday,
        tuesday,wednesday,thursday,friday,saturday,air_sys,water_sys,light_sys,fertelize_sys) VALUES 
        ('${data.startTime}', ${data["timeToLive"]},
    ${data["weekSchedule"]["sunday"]}, ${data["weekSchedule"]["monday"]}, ${data["weekSchedule"]["tuesday"]},
     ${data["weekSchedule"]["wednesday"]}, ${data["weekSchedule"]["thursday"]}, ${data["weekSchedule"]["friday"]},
      ${data["weekSchedule"]["saturday"]}, ${data["systemsToActivate"]["air_sys"]},
       ${data["systemsToActivate"]["water_sys"]}, ${data["systemsToActivate"]["light_sys"]},
        ${data["systemsToActivate"]["fertelize_sys"]});`
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
  create,
};


