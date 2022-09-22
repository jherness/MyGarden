const db = require("./db");
const helper = require("../helper");
const config = require("../config");

/*Get all activations */
async function getAllActivations() {
  const rows =
    await db.query(`SELECT dateTime_of_activation, finish_hour, activation.activation_reason
  from activation_history LEFT JOIN activation
  ON activation_history.activation_code = activation.activation_code
  ORDER BY dateTime_of_activation DESC`);
  const data = helper.emptyOrRows(rows);
  return data;
}

/*Get most common activation reason */
async function getMostCommonActivationReason() {
  const rows = await db.query(`SELECT activation_code, COUNT(*) AS AHCounter 
  FROM activation_history 
  GROUP BY activation_code 
  ORDER BY AHCounter DESC
  LIMIT 1`);
  const data = helper.emptyOrRows(rows);
  return data;
}

module.exports = {
  getAllActivations,
  getMostCommonActivationReason,
};
