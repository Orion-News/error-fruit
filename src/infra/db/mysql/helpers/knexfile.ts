import knex from "knex";

// Update with your config settings.

export default knex({
  client: "mysql2",
  connection: {
    host : '0.0.0.0',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'geverson'
  }
})
