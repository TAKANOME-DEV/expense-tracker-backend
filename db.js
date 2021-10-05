const knex = require("knex");
const pg = require("pg");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

module.exports = db;
