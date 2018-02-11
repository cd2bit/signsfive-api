// NOTE: for some reason the SignsFive API does
// not like 'export default' being used here.
// So, would like to dig in this sometime other time.
module.exports = {
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false
  },
  staging: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    use_env_variable: 'CLEARDB_DATABASE_URL',
    dialect: 'mysql',
    pool: {min: 0, max: 10, idle: 100},
    operatorsAliases: false
  }
}
