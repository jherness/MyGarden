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
async function update(id, sample) {
  const result = await db.query(
    `UPDATE samples
      SET key1 = ${sample.key1}, key2 = ${sample.key2}, key3 = ${sample.key3}, key4 =${sample.key4},
       key5 = ${sample.key5}, key6= ${sample.key6}
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
