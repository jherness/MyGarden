const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get all (year back) samples */
async function getAllSamples() {
  const rows = await db.query(`SELECT * from samples WHERE  dt_of_sample > DATE_SUB(NOW(),INTERVAL 1 MONTH)`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*Create a new sample*/
async function create(sample) {
  const result = await db.query(
    `INSERT INTO samples 
      (temperature, humidity, pressure, light, ground_humidity1, ground_humidity2, ground_humidity3) 
      VALUES 
      (${sample.temperature}, ${sample.humidity}, ${sample.pressure}, ${sample.light},
         ${sample.ground_humidity1}, ${sample.ground_humidity2}, ${sample.ground_humidity3})`
  );

  let message = "Error in creating a new sample";

  if (result.affectedRows) {
    message = "sample created successfully";
  }

  return { message };
}

/*Update sample*/
async function update(id, sample) {
  const result = await db.query(
    `UPDATE samples
      SET temperature = ${sample.key1}, humidity = ${sample.humidity}, pressure = ${sample.pressure},
      light =${sample.light}, ground_humidity1 = ${sample.ground_humidity1},
      ground_humidity2= ${sample.ground_humidity2},  ground_humidity3= ${sample.ground_humidity3}
      WHERE id = ${id} `
  );

  let message = "Error in updating sample";

  if (result.affectedRows) {
    message = "sample updated successfully";
  }

  return { message };
}

/*Delete sample*/
async function remove(id){
    const result = await db.query(
      `DELETE FROM samples WHERE id=${id}`
    );
    let message = 'Error in deleting sample';
    if (result.affectedRows) {
      message = 'sample deleted successfully';
    }
    return {message};
  }

module.exports = {
  getAllSamples,
  create,
  update,
  remove
};
