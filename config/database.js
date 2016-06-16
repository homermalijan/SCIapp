"use strict";

module.exports = {
  client: 'postgresql',
  connection: {
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.NODE_ENV != "test" ?
      process.env.DB_NAME : process.env.DB_NAME + "-test",
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations'
  }
}
