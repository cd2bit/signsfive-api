module.exports = {
  development: {
    username: 'signsfive_dev',
    password: 'signsfive_dev',
    database: 'signsfive_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
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