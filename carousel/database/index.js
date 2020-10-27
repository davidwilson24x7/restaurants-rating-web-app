const { Pool, Client } = require("pg");
const each = require("async/each");

const pool = new Pool({
  user: "postgres",
  host: "localhost", // change to databse for deplying
  database: "restaurants",
  password: "",
  port: 5432,
  prepared_statements: true,
  reconnect: true,
  prepare_threshold: 0,
  server_prepare_mode: "transaction"
});



module.exports.pool = pool;