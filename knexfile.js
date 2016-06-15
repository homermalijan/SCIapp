module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.APP_DATABASE,
      user: process.env.APP_NAME,
      password: process.env.APP_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
