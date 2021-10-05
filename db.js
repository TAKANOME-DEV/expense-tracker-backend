const knex = require("knex");
const pg = require("pg");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "takanome_dev",
    database: "expense-tracker",
  },
});

module.exports = db;
