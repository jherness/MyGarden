const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get all samples */
async function getAllSamples() {
  const rows = await db.query(`SELECT * from samples`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*Create a new sample*/
async function create(sample) {
  const result = await db.query(
    `INSERT INTO samples 
      (key1, key2, key3, key4, key5, key6) 
      VALUES 
      (${sample.key1}, ${sample.key2}, ${sample.key3}, ${sample.key4}, ${sample.key5}, ${sample.key6})`
  );

  let message = "Error in creating a new sample";

  if (result.affectedRows) {
    message = "sample created successfully";
  }

  return { message };
}

/*Update sample*/
async function update(dt_of_sample, sample) {
  const result = await db.query(
    `UPDATE samples
      SET key1 = ${sample.key1}, key2= ${sample.key1}, key3= ${sample.key1}, key4= ${sample.key1},
       key5= ${sample.key1}, key6= ${sample.key1}
      WHERE dt_of_sample=${dt_of_sample}`
  );

  let message = "Error in updating sample";

  if (result.affectedRows) {
    message = "sample updated successfully";
  }

  return { message };
}

module.exports = {
  getAllSamples,
  create,
  update,
};
